const soldier = {
  name: "Soldier",
  description:
    "You began training for war as soon as you reached adulthood and carry precious few memories of life before you took up arms. Battle is in your blood. Sometimes you catch yourself reflexively performing the basic fighting exercises you learned first. Eventually, you put that training to use on the battlefield, protecting the realm by waging war.",
  abilityScores: ["Strength", "Dexterity", "Constitution"],
  feat: "Savage Attacker",
  skillProficiencies: ["Athletics", "Intimidation"],
  toolProficiency: "Choose one kind of Gaming Set",
  equipment: {
    choices: [
      {
        description: "A",
        items: ["Spear", "Shortbow", "20 Arrows", "Gaming Set (same as above)", "Healer's Kit", "Quiver", "Traveler’s Clothes"],
        gp: 14,
      },
      {
        description: "B",
        gp: 50,
      },
    ],
  },
};

export default soldier;