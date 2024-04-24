# How to Setup this application

This guide will walk you through setting up Node.js and MongoDB which was used for this application on your system.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js: https://nodejs.org/
- MongoDB: https://www.mongodb.com/

## Installing Node.js

1. Visit the Node.js website: https://nodejs.org/
2. Download the installer for your operating system (Windows, macOS, or Linux).
3. Run the installer and follow the installation instructions.
4. To verify that Node.js and npm (Node Package Manager) are installed, open a terminal (or command prompt) and run the following commands:

- `node --version`
- `npm --version`

## Installing MongoDB

1. Visit the MongoDB website: https://www.mongodb.com/
2. Download the appropriate MongoDB Community Server edition for your operating system.
3. Follow the installation instructions for your platform.
4. Once MongoDB is installed, you may need to start the MongoDB service. Refer to the MongoDB documentation for instructions specific to your operating system.

## Setting Up your Node.js with MongoDB

1. Create a new directory for your project and run `npm init` in your terminal (ensure you are in the right directory in your terminal or `cd to the path`) this will initialize a Node.js `package.json` file, in this project the directory name is server (you can call it any name).
2. Install the following packages also from same terminal:
   - `npm install express cors mongoose nodemon dotenv`
     below is how the package.json will look like after installations

```javascript
   {
  "name": "mapped",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "mongoose": "^8.3.2",
    "nodemon": "^3.1.0"
  }
}
```

3. Creat a main file that will serve as an entry point for the application, in this project it is called `index.js`.
4. Connect to MongoDB database by:
   - first create a database name in MongoDB Compass or with your signed in account
   - setup a `.env` file and add the database url (if your database has secret key or password you can add it here also)
   - In the `index.js` file require the `express`, `dotenv`, `mongoose` and connect to your database, below is how you can do it

```javascript
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
// To Check for MongoDB connection
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
```

5. Run `npm start` now run the application and check if the database is connected with your machine. Ensure your `.env` file has the right link to your database.
6. After a successfull connection, you can go ahead to create your model, schemas and add your endpoints.
