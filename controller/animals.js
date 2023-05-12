const animals = [
  {
    animalId: 104,
    category: "Dog",
    animalImageUrl:
      "//images.ctfassets.net/3buz4oreveso/2UeTeUce0ZCGlTAbPQPZ1g/381447e04fa04bbe38abc00b07e3b5f2/Azul.jpg",
    name: "Buddy",
    gender: "male",
    age: "0.5",
    breed: "Golden Retriever",
    tags: ["friendly", "affectionate"],
    description: "Meet Buddy",
  },
];

function getAllAnimals(req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.send(animals);
}

function getAnimalById(req, res) {
  let singleAnimal = animals.items.find(
    (item) => item.fields.animalId == req.params.id
  );
  res.send(singleAnimal);
}

module.exports = { getAllAnimals, getAnimalById };
