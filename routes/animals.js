const express = require("express");
const animalsRouter = express.Router();
const {
  getAllAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} = require("../controller/animals.js");

animalsRouter.get("/animals", getAllAnimals).post(createAnimal);
animalsRouter
  .get("/animals/:animalID", getAnimalById)
  .put(updateAnimal)
  .delete(deleteAnimal);

module.exports = animalsRouter;
