require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const animalsRouter = require("./routes/animals.js");

const PORT = process.env.PORT || 8080;

app.use("/", animalsRouter);
app.use(cors());

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
