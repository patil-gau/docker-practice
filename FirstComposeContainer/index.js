require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const { PORT, MONGO_URL } = process.env;
console.log("MONGOURL", MONGO_URL);

const connectToDB = () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((err) => {
      console.log("failed to connect to mongodb", err);
    });
};

connectToDB();

app.get("/", (req, res) => {
  res.send("Welcome to Docker Compose");
});

app.listen(PORT, () => {
  console.log("Server running on port 6000");
});
