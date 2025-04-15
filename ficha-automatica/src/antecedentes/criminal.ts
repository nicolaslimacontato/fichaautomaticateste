// Criminal Background
const criminal = {
  name: "Criminal",
  description: "You eked out a living in dark alleyways, cutting purses or burgling shops. Perhaps you were part of a small gang of like-minded wrongdoers who looked out for each other. Or maybe you were a lone wolf, fending for yourself against the local thieves' guild and more fearsome lawbreakers.",
  abilityScores: ["Dexterity", "Constitution", "Intelligence"],
  feat: "Alert",
  skillProficiencies: ["Sleight of Hand", "Stealth"],
  toolProficiency: "Thieves' Tools",
  equipment: { 
    choices: [
      {
        description: "A",
        items: ["2 Daggers", "Thieves' Tools", "Crowbar", "2 Pouches", "Traveler's Clothes"],
        gp: 16,
      },
      {
        description: "B",
        gp: 50,
      },
    ],
  },
};

export default criminal;