const merchant = {
  name: "Merchant",
  description:
    "You were apprenticed to a trader, caravan master, or shopkeeper, learning the fundamentals of commerce. You traveled broadly, and you earned a living by buying and selling the raw materials artisans need to practice their craft or finished works from such crafters. You might have transported goods from one place to another (by ship, wagon, or caravan) or bought them from traveling traders and sold them in your own shop.",
  abilityScores: ["Constitution", "Intelligence", "Charisma"],
  feat: "Lucky",
  skillProficiencies: ["Animal Handling", "Persuasion"],
  toolProficiency: "Navigator's Tools",
  equipment: {
    choices: [
      {
        description: "A",
        items: ["Navigator’s Tools", "2 Pouches", "Traveler's Clothes"],
        gp: 22,
      },
      {
        description: "B",
        gp: 50,
      },
    ],
  },
};

export default merchant;