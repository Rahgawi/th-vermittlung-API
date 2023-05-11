const express = require("express");
const app = express();

const animalsRouter = require("./routes/animals.js");

const PORT = process.env.PORT || 8080;

app.use("/", animalsRouter);
