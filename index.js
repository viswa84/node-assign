const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const BookStores = require("./Routes/BookStore.js");
const PORT = process.env.PORT || 3000;
const app = express();
require("dotenv").config();

// console.log(process.env.PORT,"Port")
// console.log(process.env.MONGO_URL,"Port")


app.use(bodyParser.json());

//books api
app.use("/books", BookStores);

app.get("/", (req, res) => {
  res.json("books Api CRUD Operations");
});

app.listen(PORT, async () => {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log(`YOUR API IS RUNNING AT PORT :${process.env.PORT}`);
      })
      .catch((err) => console.log(err.message));
  });