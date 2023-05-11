const express = require("express");
const animalsRouter = express.Router();
const { getAllAnimals, getAnimalById } = require("../controller/animals.js");

animalsRouter.get("/animals", getAllAnimals);
animalsRouter.get("/animals/:animalID", getAnimalById);

module.exports = animalsRouter;
