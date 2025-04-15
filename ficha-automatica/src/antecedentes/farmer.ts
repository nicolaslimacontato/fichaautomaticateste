const farmer = {
  name: "Farmer",
  description: "You grew up close to the land. Years tending animals and cultivating the earth rewarded you with patience and good health. You have a keen appreciation for nature’s bounty alongside a healthy respect for nature's wrath.",
  abilityScores: ["Strength", "Constitution", "Wisdom"],
  feat: "Tough",
  skillProficiencies: ["Animal Handling", "Nature"],
  toolProficiency: "Carpenter's Tools",
  equipment: {
    choices: [
      {
        description: "A",
        items: ["Sickle", "Carpenter's Tools", "Healer's Kit", "Iron Pot", "Shovel", "Traveler's Clothes"],
        gp: 30,
      },
      {
        description: "B",
        gp: 50,
      },
    ],
  },
};

export default farmer;