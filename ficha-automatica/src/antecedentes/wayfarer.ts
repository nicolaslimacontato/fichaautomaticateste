const wayfarer = {
  name: "Wayfarer",
  description:
    "You grew up on the streets surrounded by similarly ill-fated castoffs, a few of them friends and a few of them rivals. You slept where you could and did odd jobs for food. At times, when the hunger became unbearable, you resorted to theft. Still, you never lost your pride and never abandoned hope. Fate is not yet finished with you.",
  abilityScores: ["Dexterity", "Wisdom", "Charisma"],
  feat: "Lucky",
  skillProficiencies: ["Insight", "Stealth"],
  toolProficiency: "Thieves' Tools",
  equipment: {
    choices: [
      {
        description: "A",
        items: ["2 Daggers", "Thieves' Tools", "Gaming Set (any)", "Bedroll", "2 Pouches", "Traveler's Clothes"],
        gp: 16,
      },
      {
        description: "B",
        gp: 50,
      },
    ],
  },
};

export default wayfarer;