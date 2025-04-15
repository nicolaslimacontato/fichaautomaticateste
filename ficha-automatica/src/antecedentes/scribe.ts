const scribe = {
  name: "Scribe",
  description:
    "You spent formative years in a scriptorium, a monastery dedicated to the preservation of knowledge, or a government agency, where you learned to write with a clear hand and produce finely written texts. Perhaps you scribed government documents or copied tomes of literature. You might have some skill as a writer of poetry, narrative, or scholarly research. Above all, you have a careful attention to detail, helping you avoid introducing mistakes to the documents you copy and create.",
  abilityScores: ["Dexterity", "Intelligence", "Wisdom"],
  feat: "Skilled",
  skillProficiencies: ["Investigation", "Perception"],
  toolProficiency: "Calligrapher's Supplies",
  equipment: {
    choices: [
      {
        description: "A",
        items: ["Calligrapher’s Supplies", "Fine Clothes", "Lamp", "Oil (3 flasks)", "Parchment (12 sheets)"],
        gp: 23,
      },
      {
        description: "B",
        gp: 50,
      },
    ],
  },
};

export default scribe;