This will be the server
Here’s the updated `README.md` with the hosted link and environment variables:

````markdown
# Portfolio 2.0 - Server

This is the backend server for my Portfolio 2.0 website. It is built using Node.js, Express, and MongoDB for handling API requests and data management.

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express**: Fast, unopinionated web framework for Node.js.
- **MongoDB**: NoSQL database for storing and managing data.
- **Mongoose**: ODM for MongoDB, used for schema definitions.
- **Axios**: Used for making HTTP requests.

## Features

- RESTful API for handling portfolio-related data.
- MongoDB integration for persistent data storage.
- Secure routes for sensitive data.
- Optimized for performance and scalability.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/PranayD1807/Portfolio-2.0-Server.git
   ```
````

2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:

   ```env
   DATABASE=<your-database-url>
   MONGODB_PASSWORD=<your-mongodb-password>
   NODE_ENV=PROD
   PORT=8080

   # Gmail for nodemailer
   GMAIL_ID=<your-gmail-id>
   GMAIL_PASSWORD=<your-gmail-password>
   ```

4. Start the server:
   ```bash
   npm start
   ```

The server will be running at [http://localhost:8080](http://localhost:8080).

## Hosted Version

The live server is hosted at: [https://portfolio-2-0-2so7.vercel.app/](https://portfolio-2-0-2so7.vercel.app/)

## API Endpoints

The detailed API documentation can be found in the [Postman](./Portfolio.postman.json) file. Import it into Postman to view and test all available endpoints.

## Deployment

This project is deployed on Vercel.

## License

This project is open-source and available under the [MIT License](./LICENSE).

```

```
