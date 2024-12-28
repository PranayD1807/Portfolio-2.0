import { createTransport } from 'nodemailer';
import AppError from '../utils/appError.js';
import dotenv from "dotenv";
import catchAsync from '../utils/catchAsync.js';
import PageView from '../models/pageviewModel.js';  // Assuming this is the model where session info is stored
dotenv.config({ path: "./.env" });

// Function to format the email body and handle null values
const getFormattedEmailBody = ({ firstName, lastName, email, phoneNumber, serviceType, message, sessionDetails }) => {
    return `
  New Contact Form Submission:

  First Name: ${firstName || 'N/A'}
  Last Name: ${lastName || 'N/A'}
  Email: ${email || 'N/A'}
  Phone Number: ${phoneNumber || 'N/A'}
  Service Type: ${serviceType || 'N/A'}
  Message: ${message || 'N/A'}
  
  Session Details:
  IP Address: ${sessionDetails.ipAddress || 'N/A'}
  Device Info: ${sessionDetails.deviceInfo || 'N/A'}

  Best Regards,
  Your Portfolio Website
    `;
};

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_PASSWORD
    }
});

export const sendMail = catchAsync(async (req, res, next) => {
    const { firstName, lastName, email, phoneNumber, serviceType, message } = req.body;
    const sessionId = req.headers['session-id'];  // Extracting session ID from headers

    if (!email && !phoneNumber) {
        return next(new AppError("Please provide at least an email or phone number.", 400));
    }

    // Fetch session details based on sessionId
    let sessionDetails = {};
    if (sessionId) {
        sessionDetails = await PageView.findOne({ sessionId });

        if (!sessionDetails) {
            return next(new AppError("Session not found.", 404));
        }
    }

    // mail options
    const mailOptions = {
        from: email || 'no-reply@portfolio.com',
        to: 'pranaydhongade1234@gmail.com',
        subject: `Portfolio - ${firstName || "N/A"} ${lastName || "N/A"} tried contacting`,
        text: getFormattedEmailBody({
            firstName,
            lastName,
            email,
            phoneNumber,
            serviceType,
            message,
            sessionDetails: {
                ipAddress: sessionDetails.ipAddress,
                deviceInfo: sessionDetails.deviceInfo
            }
        }),
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return next(new AppError("Something went wrong.", 500));
        }
        res.status(200).json({
            "status": "success",
            "data": "Form submitted successfully!",
        });
    });
});
