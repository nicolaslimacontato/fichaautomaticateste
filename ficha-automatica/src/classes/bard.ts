// Bard Class Definition
const bard = {
  name: "Bard",
  description:
    "Invoking magic through music, dance, and verse, Bards are expert at inspiring others, soothing hurts, disheartening foes, and creating illusions. Bards believe the multiverse was spoken into existence and that remnants of its Words of Creation still resound and glimmer on every plane of existence. Bardic magic attempts to harness those words, which transcend any language.\n\nAnything can inspire a new song or tale, so Bards are fascinated by almost everything. They become masters of many things, including performing music, working magic, and making jests.\n\nA Bard's life is spent traveling, gathering lore, telling stories, and living on the gratitude of audiences, much like any other entertainer. But Bards' depth of knowledge and mastery of magic sets them apart.",
  coreTraits: {
    primaryAbility: "Charisma",
    hitPointDie: 8,
    savingThrowProficiencies: ["Dexterity", "Charisma"],
    skillProficiencies: "Choose any 3 skills",
    toolProficiencies: "Choose 3 Musical Instruments",
    weaponProficiencies: ["Simple weapons"],
    armorTraining: ["Light armor"],
    startingEquipment: {
      choices: [
        {
          description: "A",
          items: ["Leather Armor", "2 Daggers", "Musical Instrument of your choice", "Entertainer’s Pack"],
          gp: 19,
        },
        {
          description: "B",
          gp: 90,
        },
      ],
    },
  },
  features: {
    1: {
      bardicInspiration: {
        name: "Bardic Inspiration",
        description:
          "You can supernaturally inspire others through words, music, or dance. This inspiration is represented by your Bardic Inspiration die, which is a d6.\n\nUsing Bardic Inspiration. As a Bonus Action, you can inspire another creature within 60 feet of yourself who can see or hear you. That creature gains one of your Bardic Inspiration dice. A creature can have only one Bardic Inspiration die at a time.\n\nOnce within the next hour when the creature fails a D20 Test, the creature can roll the Bardic Inspiration die and add the number rolled to the d20, potentially turning the failure into a success. A Bardic Inspiration die is expended when it's rolled.\n\nNumber of Uses. You can confer a Bardic Inspiration die a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.\n\nAt Higher Levels. Your Bardic Inspiration die changes when you reach certain Bard levels: d8 at level 5, d10 at level 10, and d12 at level 15.",
        bardicDie: "d6", // Starting value, will be updated at higher levels
      },
      spellcasting: {
        name: "Spellcasting",
        description:
          "You have learned to cast spells through your bardic arts.\n\nCantrips. You know two cantrips of your choice from the Bard spell list. You learn additional cantrips at higher levels.\n\nSpell Slots. You have a number of spell slots to cast spells, as determined by your Bard level.\n\nPrepared Spells of Level 1+. You prepare a list of spells available to cast. You know a certain number of prepared spells, and this number increases at higher levels.\n\nChanging Your Prepared Spells. When you gain a Bard level, you can change one of your prepared spells with another Bard spell for which you have spell slots.\n\nSpellcasting Ability. Charisma is your spellcasting ability for your Bard spells.\n\nSpellcasting Focus. You can use a Musical Instrument as a Spellcasting Focus for your Bard spells.",
        cantripsKnown: 2, // Starting value
        preparedSpells: 4, // Starting value
        spellSlots: {
          1: 2,
        },
      },
    },
    2: {
      expertise: {
        name: "Expertise",
        description:
          "You gain Expertise in two of your skill proficiencies of your choice. At Bard level 9, you gain Expertise in two more of your skill proficiencies of your choice.",
        expertises: 2, // Gained at level 2, another 2 at level 9
      },
      jackOfAllTrades: {
        name: "Jack of All Trades",
        description:
          "You can add half your Proficiency Bonus (round down) to any ability check you make that uses a skill proficiency you lack and that doesn't otherwise use your Proficiency Bonus.",
      },
    },
    3: {
      bardSubclass: {
        name: "Bard Subclass",
        description:
          "You gain a Bard subclass of your choice. The College of Dance, College of Glamour, College of Lore, and College of Valor subclasses are available.",
        subclasses: ["College of Dance", "College of Glamour", "College of Lore", "College of Valor"],
      },
      collegeOfDance: {
        name: "College of Dance",
        description: "Bards of the College of Dance move in harmony with the cosmos.",
        features: {
          3: {
            dazzlingFootwork: {
              name: "Dazzling Footwork",
              description:
                "While you aren’t wearing armor or wielding a Shield, you gain the following benefits:\n\nDance Virtuoso: You have Advantage on any Charisma (Performance) check you make that involves you dancing.\n\nUnarmored Defense: Your base Armor Class equals 10 plus your Dexterity and Charisma modifiers.\n\nAgile Strikes: When you expend a use of your Bardic Inspiration, you can make one Unarmed Strike.\n\nBardic Damage: You can use Dexterity instead of Strength for Unarmed Strikes. Your Unarmed Strikes deal Bludgeoning damage equal to your Bardic Inspiration die roll plus your Dexterity modifier.",
            },
          },
          6: {
            inspiringMovement: {
              name: "Inspiring Movement",
              description:
                "When an enemy you can see ends its turn within 5 feet of you, you can expend one use of your Bardic Inspiration to move up to half your Speed. Then one ally of your choice within 30 feet of you can also move up to half their Speed.",
            },
            tandemFootwork: {
              name: "Tandem Footwork",
              description:
                "When you roll Initiative, you can expend one use of your Bardic Inspiration to gain a bonus to Initiative equal to the number rolled. Allies within 30 feet of you also gain this bonus.",
            },
          },
          14: {
            leadingEvasion: {
              name: "Leading Evasion",
              description:
                "When you succeed on a Dexterity saving throw to take half damage, you instead take no damage. If you fail the saving throw, you take half damage. You can share this benefit with creatures within 5 feet of you.",
            },
          },
        },
      },
      collegeOfGlamour: {
        name: "College of Glamour",
        description: "Bards of the College of Glamour weave beguiling fey magic.",
        features: {
          3: {
            beguilingMagic: {
              name: "Beguiling Magic",
              description:
                "You always have the Charm Person and Mirror Image spells prepared. After casting an Enchantment or Illusion spell, you can cause a creature to make a Wisdom saving throw to become Charmed or Frightened.",
              alwaysPrepared: ["Charm Person", "Mirror Image"],
            },
            mantleOfInspiration: {
              name: "Mantle of Inspiration",
              description:
                "As a Bonus Action, you can expend a use of Bardic Inspiration to grant Temporary Hit Points and allow allies to move without provoking Opportunity Attacks.",
            },
          },
          6: {
            mantleOfMajesty: {
              name: "Mantle of Majesty",
              description:
                "You always have the Command spell prepared. As a Bonus Action, you can cast Command without expending a spell slot and take on an unearthly appearance. Creatures Charmed by you automatically fail saving throws against this Command.",
              alwaysPrepared: ["Command"],
            },
          },
          14: {
            unbreakableMajesty: {
              name: "Unbreakable Majesty",
              description:
                "As a Bonus Action, you can assume a majestic presence. When a creature hits you with an attack for the first time on its turn, it must make a Charisma saving throw or the attack misses.",
            },
          },
        },
      },
      collegeOfLore: {
        name: "College of Lore",
        description: "Bards of the College of Lore plumb the depths of magical knowledge.",
        features: {
          3: {
            bonusProficiencies: {
              name: "Bonus Proficiencies",
              description: "You gain proficiency with three skills of your choice.",
              skills: 3, // Number of skills to choose
            },
            cuttingWords: {
              name: "Cutting Words",
              description:
                "When a creature makes a damage roll or succeeds on an ability check or attack roll, you can expend a use of Bardic Inspiration to subtract the number rolled from the creature's roll.",
            },
          },
          6: {
            magicalDiscoveries: {
              name: "Magical Discoveries",
              description:
                "You learn two spells of your choice from the Cleric, Druid, or Wizard spell list. These spells are always prepared.",
              spells: 2, // Number of spells to choose
            },
          },
          14: {
            peerlessSkill: {
              name: "Peerless Skill",
              description:
                "When you fail an ability check or attack roll, you can expend a use of Bardic Inspiration to add the number rolled to the d20, potentially turning a failure into a success.",
            },
          },
        },
      },
      collegeOfValor: {
        name: "College of Valor",
        description: "Bards of the College of Valor sing the deeds of ancient heroes.",
        features: {
          3: {
            combatInspiration: {
              name: "Combat Inspiration",
              description:
                "A creature with your Bardic Inspiration can use it to add to its AC against an attack or add to the damage of an attack.",
              options: ["Defense", "Offense"],
            },
            martialTraining: {
              name: "Martial Training",
              description:
                "You gain proficiency with Martial weapons and training with Medium armor and Shields. You can also use a Simple or Martial weapon as a Spellcasting Focus.",
              weaponProficiencies: ["Martial weapons"],
              armorTraining: ["Medium armor", "Shields"],
            },
          },
          6: {
            extraAttack: {
              name: "Extra Attack",
              description: "You can attack twice instead of once when you take the Attack action. You can replace one of these attacks with a cantrip.",
            },
          },
          14: {
            battleMagic: {
              name: "Battle Magic",
              description: "After casting a spell with a casting time of an action, you can make one weapon attack as a Bonus Action.",
            },
          },
        },
      },
    },
  },
  levels: {
    4: {
      abilityScoreImprovement: {
        name: "Ability Score Improvement",
        description:
          "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.",
      },
    },
    5: {
      fontOfInspiration: {
        name: "Font of Inspiration",
        description:
          "You regain all your expended uses of Bardic Inspiration when you finish a Short or Long Rest. You can also expend a spell slot to regain one expended use of Bardic Inspiration.",
      },
    },
    7: {
      countercharm: {
        name: "Countercharm",
        description:
          "You can use musical notes or words of power to disrupt mind-influencing effects. If you or a creature within 30 feet of you fails a saving throw against an effect that applies the Charmed or Frightened condition, the save is rerolled with Advantage.",
      },
    },
    8: {
      abilityScoreImprovement: {
        name: "Ability Score Improvement",
        description:
          "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.",
      },
    },
    10: {
      magicalSecrets: {
        name: "Magical Secrets",
        description:
          "You've learned secrets from various magical traditions. You can choose new prepared spells from the Bard, Cleric, Druid, and Wizard spell lists, and these count as Bard spells for you. You can also replace spells with spells from these lists.",
      },
    },
  },

};