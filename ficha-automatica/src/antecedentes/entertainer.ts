const entertainer = {
  name: 'Entertainer',
  description:
    'You spent much of your youth following roving fairs and carnivals, performing odd jobs for musicians and acrobats in exchange for lessons. You may have learned how to walk a tightrope, how to play a lute in a distinct style, or how to recite poetry with impeccable diction. To this day, you thrive on applause and long for the stage.',
  abilityScores: ['Strength', 'Dexterity', 'Charisma'],
  feat: 'Musician',
  skillProficiencies: ['Acrobatics', 'Performance'],
  toolProficiency: 'Choose one kind of Musical Instrument',
  equipment: {
    choices: [
      {
        description: 'A',
        items: ['Musical Instrument (same as above)', '2 Costumes', 'Mirror', 'Perfume', 'Traveler’s Clothes'],
        gp: 11,
      },
      {
        description: 'B',
        gp: 50,
      },
    ],
  },
};

export default entertainer;