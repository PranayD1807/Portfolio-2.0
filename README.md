# 🚀 Portfolio 2.0

Welcome to **Portfolio 2.0**! This is the complete project for my personal portfolio website, featuring a slick, responsive front end built with cutting-edge web technologies and a powerful backend serving data through a RESTful API. It's the perfect showcase of my skills as a full-stack developer!

[Live Demo](https://portfolio-2-0-chi-woad.vercel.app/) | [Server](https://portfolio-2-0-2so7.vercel.app/)

## 🌟 Overview

- **Frontend**: Next.js, Tailwind CSS, and React, offering a lightning-fast, interactive UI.
- **Backend**: Node.js and Express with MongoDB to handle all the data management through a seamless API.
- **Deployment**: Hosted on Vercel for both front and backend, ensuring smooth, scalable, and reliable performance.

## ✨ Features

### Frontend

- 🖼 **Dynamic UI**: Sleek design, fully responsive across all devices.
- ⚡ **Fast and Smooth**: Built with Next.js, enabling SSR and optimized performance.
- 🌈 **Tailwind CSS**: Easily maintainable design, making development faster.
- 🔄 **Axios Integration**: For clean and simple API consumption.
- 🎨 **shadcn/ui**: Leveraging beautiful, customizable components.

### Backend

- 🔐 **Secure API**: RESTful services with MongoDB and Mongoose for persistent data storage.
- 📧 **Contact Form Integration**: Uses Nodemailer to send emails via Gmail SMTP.
- 📁 **Well-structured Code**: Organized codebase with clear separation of concerns.
- 🛠️ **Scalable**: Ready to handle more requests with ease.

## 🛠️ Tech Stack

### Frontend:

- **Next.js**: The React framework for production.
- **Tailwind CSS**: Utility-first CSS framework.
- **React**: For building interactive UIs.
- **Axios**: HTTP client for API requests.
- **shadcn/ui**: Pre-built UI components.

### Backend:

- **Node.js**: JavaScript runtime.
- **Express.js**: Fast and minimal server framework.
- **MongoDB**: NoSQL database for storing all data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Nodemailer**: Handles contact form email delivery.

## 🚀 Quick Start

### Frontend

1. Clone the frontend repository:
   ```bash
   git clone https://github.com/PranayD1807/Portfolio-2.0.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

The frontend will be running at [http://localhost:3000](http://localhost:3000).

### Backend

1. Clone the backend repository:
   ```bash
   git clone https://github.com/PranayD1807/Portfolio-2.0-Server.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env` file:

   ```env
   DATABASE=<your-database-url>
   MONGODB_PASSWORD=<your-mongodb-password>
   NODE_ENV=PROD
   PORT=8080

   # Gmail for nodemailer
   GMAIL_ID=<your-gmail-id>
   GMAIL_PASSWORD=<your-gmail-password>
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

The backend will be running at [http://localhost:8080](http://localhost:8080).

## 📋 API Documentation

Detailed API documentation is available in the `postman.json` file, which can be imported into Postman for easy testing and exploration.

## 📂 Project Structure

```bash
portfolio-2.0/
├── client/          # Next.js frontend code
├── server/           # Express.js backend code
   ├── postman.json       # API collection for testing
└── README.md          # This file!
```

## 🌍 Live Version

- Frontend: [https://pranaydhongade.site](https://pranaydhongade.site)
- Backend: [https://api.pranaydhongade.site](https://api.pranaydhongade.site)

## 🚀 Deployment

The project is deployed on Vercel, making both the frontend and backend accessible globally with zero configuration.

## 📬 Contact

Feel free to reach out to me via the contact form on the portfolio or directly through [my email](mailto:pranaydhongade1234@gmail.com).

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

Happy Coding! 🎉
