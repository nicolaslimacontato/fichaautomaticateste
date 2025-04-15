const sailor = {
  name: "Sailor",
  description:
    "You lived as a seafarer, wind at your back and decks swaying beneath your feet. You've perched on barstools in more ports of call than you can remember, faced mighty storms, and swapped stories with folk who live beneath the waves.",
  abilityScores: ["Strength", "Dexterity", "Wisdom"],
  feat: "Tavern Brawler",
  skillProficiencies: ["Acrobatics", "Perception"],
  toolProficiency: "Navigator's Tools",
  equipment: {
    choices: [
      {
        description: "A",
        items: ["Dagger", "Navigator's Tools", "Rope", "Traveler's Clothes"],
        gp: 20,
      },
      {
        description: "B",
        gp: 50,
      },
    ],
  },
};

export default sailor;