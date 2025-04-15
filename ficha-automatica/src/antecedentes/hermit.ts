const hermit = {
  name: "Hermit",
  description: "You spent your early years secluded in a hut or monastery located well beyond the outskirts of the nearest settlement. In those days, your only companions were the creatures of the forest and those who would occasionally visit to bring news of the outside world and supplies. The solitude allowed you to spend many hours pondering the mysteries of creation.",
  abilityScores: ["Constitution", "Wisdom", "Charisma"],
  feat: "Healer",
  skillProficiencies: ["Medicine", "Religion"],
  toolProficiency: "Herbalism Kit",
  equipment: {
    choices: [
      {
        description: "A",
        items: ["Quarterstaff", "Herbalism Kit", "Bedroll", "Book (philosophy)", "Lamp", "Oil (3 flasks)", "Traveler's Clothes"],
        gp: 16,
      },
      {
        description: "B",
        gp: 50,
      },
    ],
  },
};

export default hermit;