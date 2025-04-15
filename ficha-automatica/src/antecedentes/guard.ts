const guard = {
  name: "Guard",
  description:
    "Your feet ache when you remember the countless hours you spent at your post in the tower. You were trained to keep one eye looking outside the wall, watching for marauders sweeping from the nearby forest, and your other eye looking inside the wall, searching for cutpurses and troublemakers.",
  abilityScores: ["Strength", "Intelligence", "Wisdom"],
  feat: "Alert",
  skillProficiencies: ["Athletics", "Perception"],
  toolProficiency: "Choose one kind of Gaming Set",
  equipment: {
    choices: [
      {
        description: "A",
        items: ["Spear", "Light Crossbow", "20 Bolts", "Gaming Set (same as above)", "Hooded Lantern", "Manacles", "Quiver", "Traveler’s Clothes"],
        gp: 12,
      },
      {
        description: "B",
        gp: 50,
      },
    ],
  },
};

export default guard;