const noble = {
  name: "Noble",
  description:
    "You were raised in a castle, surrounded by wealth, power, and privilege. Your family of minor aristocrats ensured that you received a first-class education, some of which you appreciated and some of which you resented. Your time in the castle, especially the many hours you spent observing your family at court, also taught you a great deal about leadership.",
  abilityScores: ["Strength", "Intelligence", "Charisma"],
  feat: "Skilled",
  skillProficiencies: ["History", "Persuasion"],
  toolProficiency: "Choose one kind of Gaming Set",
  equipment: {
    choices: [
      {
        description: "A",
        items: ["Gaming Set (same as above)", "Fine Clothes", "Perfume"],
        gp: 29,
      },
      {
        description: "B",
        gp: 50,
      },
    ],
  },
};

export default noble;