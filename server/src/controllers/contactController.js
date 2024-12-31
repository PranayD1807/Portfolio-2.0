import { createTransport } from 'nodemailer';
import { google } from 'googleapis';
import AppError from '../utils/appError.js';
import dotenv from "dotenv";
import catchAsync from '../utils/catchAsync.js';
import PageView from '../models/pageviewModel.js';
dotenv.config({ path: "./.env" });
import path from 'path';

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

// Nodemailer transporter
const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_PASSWORD
    }
});

// Google Sheets authentication
const sheetsAuth = new google.auth.GoogleAuth({
    keyFile: path.resolve('src/google-service-account-key.json'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const SHEET_ID = process.env.GOOGLE_SHEET_ID;

const appendToGoogleSheet = async (rowData) => {
    const client = await sheetsAuth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    // Fetch the current number of rows to calculate the next serial number
    const rowsData = await sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: 'Sheet1!A:A',
    });

    const nextSrNo = (rowsData.data.values ? rowsData.data.values.length : 1); // Start from 1 if empty

    const rowWithSrNo = [nextSrNo, ...rowData];

    // Append the data row to the sheet
    await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: 'Sheet1!A1',
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [rowWithSrNo],
        },
    });
};


export const sendMail = catchAsync(async (req, res, next) => {
    const { firstName, lastName, email, phoneNumber, serviceType, message } = req.body;
    const sessionId = req.headers['session-id'];

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

    const timestamp = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
    });

    // Prepare data for Google Sheet
    const rowData = [
        firstName || 'N/A',
        lastName || 'N/A',
        email || 'N/A',
        phoneNumber || 'N/A',
        serviceType || 'N/A',
        message || 'N/A',
        sessionDetails.ipAddress || 'N/A',
        sessionDetails.deviceInfo || 'N/A',
        timestamp,
    ];

    // Append data to Google Sheet
    try {
        await appendToGoogleSheet(rowData);
    } catch (error) {
        console.error("Error saving data to Google Sheet:", error);
        return next(new AppError("Failed to save data to Google Sheet.", 500));
    }

    // Mail options
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
            status: "success",
            data: "Form submitted successfully!",
        });
    });
});
