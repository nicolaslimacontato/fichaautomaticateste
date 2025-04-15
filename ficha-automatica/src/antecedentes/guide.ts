const guide = {
  name: "Guide",
  description:
    "You came of age outdoors, far from settled lands. Your home was anywhere you chose to spread your bedroll. There are wonders in the wilderness— strange monsters, pristine forests and streams, overgrown ruins of great halls once trod by giants— and you learned to fend for yourself as you explored them. From time to time, you guided friendly nature priests who instructed you in the fundamentals of channeling the magic of the wild.",
  abilityScores: ["Dexterity", "Constitution", "Wisdom"],
  feat: "Magic Initiate (Druid)",
  skillProficiencies: ["Stealth", "Survival"],
  toolProficiency: "Cartographer's Tools",
  equipment: {
    choices: [
      {
        description: "A",
        items: ["Shortbow", "20 Arrows", "Cartographer’s Tools", "Bedroll", "Quiver", "Tent", "Traveler's Clothes"],
        gp: 3,
      },
      {
        description: "B",
        gp: 50,
      },
    ],
  },
};

export default guide;