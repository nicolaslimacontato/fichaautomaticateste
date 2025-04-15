const acolito = {
  name: 'Acolyte',
  description:
    'You devoted yourself to service in a temple, either nestled in a town or secluded in a sacred grove. There you performed rites in honor of a god or pantheon. You served under a priest and studied religion. Thanks to your priest\'s instruction and your own devotion, you also learned how to channel a modicum of divine power in service to your place of worship and the people who prayed there.',
  abilityScores: ['Intelligence', 'Wisdom', 'Charisma'],
  feat: 'Magic Initiate (Cleric)',
  skillProficiencies: ['Insight', 'Religion'],
  toolProficiency: 'Calligrapher\'s Supplies',
  equipment: {
    choices: [
      {
        description: 'A',
        items: ['Calligrapher\'s Supplies', 'Book (prayers)', 'Holy Symbol', 'Parchment (10 sheets)', 'Robe'],
        gp: 8,
      },
      {
        description: 'B',
        gp: 50,
      },
    ],
  },
};

export default acolito;