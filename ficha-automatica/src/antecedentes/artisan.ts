// Artisan Background
const artisan = {
  name: "Artisan",
  description:
    "You began mopping floors and scrubbing counters in an artisan’s workshop for a few coppers per day as soon as you were strong enough to carry a bucket. When you were old enough to apprentice, you learned to create basic crafts of your own, as well as how to sweet-talk the occasional demanding customer. Your trade has also given you a keen eye for detail.",
  abilityScores: ["Strength", "Dexterity", "Intelligence"],
  feat: "Crafter",
  skillProficiencies: ["Investigation", "Persuasion"],
  toolProficiency: "Choose one kind of Artisan’s Tools",
  equipment: {
    choices: [
      {
        description: "A",
        items: ["Artisan's Tools (same as above)", "2 Pouches", "Traveler’s Clothes"],
        gp: 32,
      },
      {
        description: "B",
        gp: 50,
      },
    ],
  },
};

export default artisan;