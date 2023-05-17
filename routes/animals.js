const express = require("express");
const animalsRouter = express.Router();
const validateAuth = require("../controller/admin");
const {
  getAllAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} = require("../controller/animals.js");

animalsRouter.route("/animals").get(getAllAnimals);
animalsRouter.route("/animals/admin").post(validateAuth, createAnimal);
animalsRouter.route("/animals/:animalId").get(getAnimalById);

animalsRouter
  .route("/animals/admin/:animalId")
  .put(validateAuth, updateAnimal)
  .delete(validateAuth, deleteAnimal);

module.exports = animalsRouter;
