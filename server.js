//Importing and creating an instance of express
const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// Gets the Username and Password 
const MONGO_URI = `mongodb+srv://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@cluster0.o2yktuk.mongodb.net/?retryWrites=true&w=majority`;

// Creating the connect function
const connectDB = async () => {
  await mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo connected successfully"))// Logs out successful when MongoDB connects.
    .catch((e) => {
      console.log(e.message);// Logs out the error message if it encounters any.
    });
};

// Calling the Connect Function
connectDB();

//Setting PORT to 5000 if PORT is not listed in environmental variables.
const PORT = process.env.PORT || 5000;

// Creating the `GET` route
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

//Starting the express server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);