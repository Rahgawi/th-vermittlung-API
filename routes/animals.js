const express = require("express");
const animalsRouter = express.Router();
const {
  getAllAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} = require("../controller/animals.js");

animalsRouter.route("/animals").get(getAllAnimals).post(createAnimal);
animalsRouter
  .route("/animals/:animalId")
  .get(getAnimalById)
  .put(updateAnimal)
  .delete(deleteAnimal);

module.exports = animalsRouter;
