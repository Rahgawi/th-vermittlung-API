const animals = {
  items: [
    {
      fields: {
        animalId: 104,
        category: "Dog",
        animalImage: {
          sys: {
            id: "4VScLyrFkPoNyvmWeGJhJm",
          },
        },
        name: "Buddy",
        gender: "male",
        age: "0.5",
        breed: "Golden Retriever",
        tags: ["friendly", "affectionate"],
        description: "Meet Buddy",
      },
    },
  ],
  includes: {
    Asset: [
      {
        fields: {
          title: "Buddy",
          file: {
            url: "//images.ctfassets.net/3buz4oreveso/2UeTeUce0ZCGlTAbPQPZ1g/381447e04fa04bbe38abc00b07e3b5f2/Azul.jpg",
          },
        },
        sys: { id: "4VScLyrFkPoNyvmWeGJhJm" },
      },
    ],
  },
};

function getAllAnimals(req, res) {
  res.send(animals);
}

function getAnimalById(req, res) {
  let singleAnimal = animals.items.find(
    (item) => item.fields.animalId == req.params.id
  );
  res.send(singleAnimal);
}

module.exports = { getAllAnimals, getAnimalById };
