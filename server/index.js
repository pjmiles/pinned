require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
// To Check for MongoDB connection
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/users", async (req, res) => {
  await UserModel.find({})
    .then(function (user) {
      res.json(user);
    })
    .catch(function (e) {
      console.log(e);
    });
});

app.post("/users", async (req, res) => {
  const { name, address, phoneNumber } = req.body;

  if (!name || !address || !phoneNumber) {
    return res
      .status(400)
      .json({ error: "Please provide your details." });
  }
  try {
    const newUserDetails = new UserModel({
      name,
      address,
      phoneNumber,
    });
    await newUserDetails.save();
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Error saving data" });
  }
});

app.listen(5000, () => {
  console.log("Server is running");
});
