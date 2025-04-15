const sage = {
  name: "Sage",
  description: "You spent your formative years traveling between manors and monasteries, performing various odd jobs and services in exchange for access to their libraries. You whiled away many a long evening studying books and scrolls, learning the lore of the multiverse - even the rudiments of magic - and your mind yearns for more.",
  abilityScores: ["Constitution", "Intelligence", "Wisdom"],
  feat: "Magic Initiate (Wizard)",
  skillProficiencies: ["Arcana", "History"],
  toolProficiency: "Calligrapher's Supplies",
  equipment: {
    choices: [
      {
        description: "A",
        items: ["Quarterstaff", "Calligrapher's Supplies", "Book (history)", "Parchment (8 sheets)", "Robe"],
        gp: 8,
      },
      {
        description: "B",
        gp: 50,
      },
    ],
  },
};

export default sage;