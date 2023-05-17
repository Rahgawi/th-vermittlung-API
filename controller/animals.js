const pool = require("./db");

// const animals = [
//   {
//     animalId: 104,
//     category: "Dog",
//     animalImageUrl:
//       "//images.ctfassets.net/3buz4oreveso/2UeTeUce0ZCGlTAbPQPZ1g/381447e04fa04bbe38abc00b07e3b5f2/Azul.jpg",
//     name: "Buddy",
//     gender: "male",
//     age: "0.5",
//     breed: "Golden Retriever",
//     tags: ["friendly", "affectionate"],
//     description: "Meet Buddy",
//   },
// ];

async function getAllAnimals(req, res) {
  try {
    const db_res = await pool.query("SELECT * FROM animals");
    res.status(200).json(db_res.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send("Oops, something went wrong. :(");
  }
}

async function getAnimalById(req, res) {
  const { animalId } = req.params;
  try {
    const { rows: animals } = await pool.query(
      "SELECT * FROM animals WHERE animalId=$1",
      [animalId]
    );
    if (animals.length) res.status(200).json(animals[0]);
    else res.status(404).send(`No animal with id ${animalId} found.`);
  } catch (err) {
    console.log(err);
    res.status(500).send("Oops, something went wrong. :(");
  }
}

async function createAnimal(req, res) {
  try {
    const {
      category,
      animalImageUrl,
      name,
      gender,
      age,
      breed,
      tags,
      description,
    } = req.body;
    const { rows: createdAnimal } = await pool.query(
      "INSERT INTO animals (category, animalImageUrl, name, gender, age, breed, tags, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;",
      [category, animalImageUrl, name, gender, age, breed, tags, description]
    );
    res.status(201).send(`${category}${name} has been created`);
  } catch (err) {
    console.log(err);
    res.status(500).send("Oops, something went wrong. :(");
  }
}

async function updateAnimal(req, res) {
  const { animalId } = req.params;
  const {
    category,
    animalimageurl,
    name,
    gender,
    age,
    breed,
    tags,
    description,
  } = req.body;
  try {
    const { rows: updatedAnimal } = await pool.query(
      "UPDATE animals SET category=$1, animalImageUrl=$2, name=$3, gender=$4, age=$5, breed=$6, tags=$7, description=$8 WHERE animalId=$9",
      [
        category,
        animalimageurl,
        name,
        gender,
        age,
        breed,
        tags,
        description,
        animalId,
      ]
    );
    res.status(200).send(`${category} ${name} has been updated.`);
  } catch (err) {
    console.log(err);
    res.status(500).send("Oops, something went wrong. :(");
  }
}

async function deleteAnimal(req, res) {
  const { animalId } = req.params;
  try {
    const { rows: deletedAnimal } = await pool.query(
      "DELETE FROM animals WHERE animalId=$1 RETURNING *",
      [animalId]
    );
    res
      .status(200)
      .send(
        `${deletedAnimal.category} ${deletedAnimal.name} with the id ${animalId} has been deleted.`
      );
  } catch (err) {
    console.log(err);
    res.status(500).send("Oops, something went wrong. :(");
  }
}

module.exports = {
  getAllAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal,
};
