const charlatan = {
  name: "Charlatan",
  description: "Once you were old enough to order an ale, you soon had a favorite stool in every tavern within ten miles of where you were born. As you traveled the circuit from public house to watering hole, you learned to prey on unfortunates who were in the market for a comforting lie or two—perhaps a sham potion or forged ancestry records.",
  abilityScores: ["Dexterity", "Constitution", "Charisma"],
  feat: "Skilled",
  skillProficiencies: ["Deception", "Sleight of Hand"],
  toolProficiency: "Forgery Kit",
  equipment: {
    choices: [
      {
        description: "A",
        items: ["Forgery Kit", "Costume", "Fine Clothes"],
        gp: 15,
      },
      {
        description: "B",
        gp: 50,
      },
    ],
  },
};
export default charlatan;