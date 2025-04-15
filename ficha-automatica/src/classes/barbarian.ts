const barbarian = {
  name: 'Barbarian',
  description:
    'Barbarians are mighty warriors who are powered by primal forces of the multiverse that manifest as a Rage. More than a mere emotion—and not limited to anger—this Rage is an incarnation of a predator’s ferocity, a storm\'s fury, and a sea\'s turmoil.',
  coreTraits: {
    primaryAbility: 'Strength',
    hitPointDie: 12,
    savingThrowProficiencies: ['Strength', 'Constitution'],
    skillProficiencies: [
      'Animal Handling',
      'Athletics',
      'Intimidation',
      'Nature',
      'Perception',
      'Survival',
    ],
    weaponProficiencies: ['Simple weapons', 'Martial weapons'],
    armorTraining: ['Light armor', 'Medium armor', 'Shields'],
    startingEquipment: {
      choices: [
        {
          description: 'A',
          items: ['Greataxe', '4 Handaxes', 'Explorer’s Pack'],
          gp: 15,
        },
        {
          description: 'B',
          gp: 75,
        },
      ],
    },
  },
  level1: {
    rage: {
      description:
        'You can imbue yourself with a primal power called Rage, a force that grants you extraordinary might and resilience. You can enter it as a Bonus Action if you aren\'t wearing Heavy armor.',
      mechanics: {
        activation: 'Bonus Action',
        armorRestriction: 'Cannot be used while wearing Heavy armor',
        effects: [
          'Damage Resistance: Resistance to Bludgeoning, Piercing, and Slashing damage.',
          'Rage Damage: When you make an attack using Strength—with either a weapon or an Unarmed Strike—and deal damage to the target, you gain a bonus to the damage that increases as you gain levels as a Barbarian.',
          'Strength Advantage: Advantage on Strength checks and Strength saving throws.',
          'No Concentration or Spells: You can\'t maintain Concentration, and you can\'t cast spells.',
          'Duration: The Rage lasts until the end of your next turn, and it ends early if you don Heavy armor or have the Incapacitated condition. If your Rage is still active on your next turn, you can extend the Rage for another round by doing one of the following:\n' +
            'Make an attack roll against an enemy.\n' +
            'Force an enemy to make a saving throw.\n' +
            'Take a Bonus Action to extend your Rage.\n' +
            'Each time the Rage is extended, it lasts until the end of your next turn. You can maintain a Rage for up to 10 minutes.',
        ],
      },
    },
    unarmoredDefense: {
      description:
        'While you aren\'t wearing any armor, your base Armor Class equals 10 plus your Dexterity and Constitution modifiers. You can use a Shield and still gain this benefit.',
      mechanics: {
        armorRestriction: 'No armor',
        calculation: 'Armor Class = 10 + Dexterity modifier + Constitution modifier',
        shield: 'Shield can be used without affecting this benefit',
      },
    },
    weaponMastery: {
      description:
        'Your training with weapons allows you to use the mastery properties of two kinds of Simple or Martial Melee weapons of your choice. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.',
      mechanics: {
        choices: 2,
        weaponTypes: ['Simple Melee weapons', 'Martial Melee weapons'],
        changeOnLongRest: true,
      },
    },
  },
  level2: {
    dangerSense: {
      description:
        'You gain an uncanny sense of when things aren\'t as they should be, giving you an edge when you dodge perils. You have Advantage on Dexterity saving throws unless you have the Incapacitated condition.',
      mechanics: {
        savingThrow: 'Dexterity saving throws',
        advantage: true,
        condition: 'Does not apply if Incapacitated',
      },
    },
    recklessAttack: {
      description:
        'You can throw aside all concern for defense to attack with increased ferocity. When you make your first attack roll on your turn, you can decide to attack recklessly. Doing so gives you Advantage on attack rolls using Strength until the start of your next turn, but attack rolls against you have Advantage during that time.',
      mechanics: {
        activation: 'Decision before first attack roll on your turn',
        attackType: 'Strength-based attacks',
        advantageOnAttack: true,
        vulnerableToAttack: true,
        duration: 'Until the start of your next turn',
      },
    },
  },
  level3: {
    primalKnowledge: {
      description:
        'You gain proficiency in another skill of your choice from the skill list available to Barbarians at level 1. In addition, while your Rage is active, you can channel primal power when you attempt certain tasks; whenever you make an ability check using one of the following skills, you can make it as a Strength check even if it normally uses a different ability.',
      mechanics: {
        extraSkillProficiency: true,
        skills: [
          'Animal Handling',
          'Athletics',
          'Intimidation',
          'Nature',
          'Perception',
          'Survival',
        ],
        rageEffect:
          'While Rage is active, Acrobatics, Intimidation, Perception, Stealth, or Survival checks can be made as Strength checks.',
      },
    },
    subclasses: {
      berserker: {
        name: 'Path of the Berserker',
        level3: {
          frenzy: {
            description:
              'If you use Reckless Attack while your Rage is active, you deal extra damage to the first target you hit on your turn with a Strength-based attack.',
            mechanics: {
              condition: 'Must use Reckless Attack during Rage',
              extraDamage:
                'Roll a number of d6s equal to your Rage Damage bonus, and add them together. The damage has the same type as the weapon or Unarmed Strike used for the attack.',
            },
          },
        },
        level6: {
          mindlessRage: {
            description:
              'You have Immunity to the Charmed and Frightened conditions while your Rage is active. If you\'re Charmed or Frightened when you enter your Rage, the condition ends on you.',
            mechanics: {
              immunity: ['Charmed', 'Frightened'],
              conditionRemoval: 'Charmed or Frightened conditions end upon entering Rage',
            },
          },
        },
        level10: {
          retaliation: {
            description:
              'When you take damage from a creature that is within 5 feet of you, you can take a Reaction to make one melee attack against that creature, using a weapon or an Unarmed Strike.',
            mechanics: {
              trigger: 'Taking damage from a creature within 5 feet',
              reactionAttack: 'One melee attack against the triggering creature',
            },
          },
        },
        level14: {
          intimidatingPresence: {
            description:
              'As a Bonus Action, you can strike terror into others with your menacing presence and primal power. When you do so, each creature of your choice in a 30-foot Emanation originating from you must make a Wisdom saving throw.',
            mechanics: {
              activation: 'Bonus Action',
              range: '30-foot Emanation',
              savingThrow: 'Wisdom saving throw (DC 8 + Strength modifier + Proficiency Bonus)',
              effect: 'On a failed save, the creature has the Frightened condition for 1 minute. The creature repeats the save at the end of each of its turns.',
              usage: 'Once per Long Rest, or expend a use of Rage to use again',
            },
          },
        },
      },
      wildHeart: {
        name: 'Path of the Wild Heart',
        level3: {
          animalSpeaker: {
            description:
              'You can cast the Beast Sense and Speak with Animals spells but only as Rituals. Wisdom is your spellcasting ability for them.',
            mechanics: {
              spells: ['Beast Sense', 'Speak with Animals'],
              castingTime: 'Ritual',
              spellcastingAbility: 'Wisdom',
            },
          },
          rageOfTheWilds: {
            description:
              'Your Rage taps into the primal power of animals. Whenever you activate your Rage, you gain one of the following options of your choice.',
            mechanics: {
              options: {
                bear:
                  'While your Rage is active, you have Resistance to every damage type except Force, Necrotic, Psychic, and Radiant.',
                eagle:
                  'When you activate your Rage, you can take the Disengage and Dash actions as part of that Bonus Action. While your Rage is active, you can take a Bonus Action to take both of those actions.',
                wolf:
                  'While your Rage is active, your allies have Advantage on attack rolls against any enemy of yours within 5 feet of you.',
              },
            },
          },
        },
        level6: {
          aspectOfTheWilds: {
            description:
              'You gain one of the following options of your choice. Whenever you finish a Long Rest, you can change your choice.',
            mechanics: {
              options: {
                owl:
                  'You have Darkvision with a range of 60 feet. If you already have Darkvision, its range increases by 60 feet.',
                panther: 'You have a Climb Speed equal to your Speed.',
                salmon: 'You have a Swim Speed equal to your Speed.',
              },
              changeOnLongRest: true,
            },
          },
        },
        level10: {
          natureSpeaker: {
            description:
              'You can cast the Commune with Nature spell but only as a Ritual. Wisdom is your spellcasting ability for it.',
            mechanics: {
              spell: 'Commune with Nature',
              castingTime: 'Ritual',
              spellcastingAbility: 'Wisdom',
            },
          },
        },
        level14: {
          powerOfTheWilds: {
            description:
              'Whenever you activate your Rage, you gain one of the following options of your choice.',
            mechanics: {
              options: {
                falcon:
                  'While your Rage is active, you have a Fly Speed equal to your Speed if you aren’t wearing any armor.',
                lion:
                  'While your Rage is active, any of your enemies within 5 feet of you have Disadvantage on attack rolls against targets other than you or another Barbarian who has this option active.',
                ram:
                  'While your Rage is active, you can cause a Large or smaller creature to have the Prone condition when you hit it with a melee attack.',
              },
            },
          },
        },
      },
      worldTree: {
        name: 'Path of the World Tree',
        level3: {
          vitalityOfTheTree: {
            description:
              'Your Rage taps into the life force of the World Tree. You gain the following benefits.',
            mechanics: {
              vitalitySurge:
                'When you activate your Rage, you gain a number of Temporary Hit Points equal to your Barbarian level.',
              lifeGivingForce:
                'At the start of each of your turns while your Rage is active, you can choose another creature within 10 feet of yourself to gain Temporary Hit Points. To determine the number of Temporary Hit Points, roll a number of d6s equal to your Rage Damage bonus, and add them together.',
            },
          },
        },
        level6: {
          branchesOfTheTree: {
            description:
              'Whenever a creature you can see starts its turn within 30 feet of you while your Rage is active, you can take a Reaction to summon spectral branches of the World Tree around it.',
            mechanics: {
              trigger: 'A creature starts its turn within 30 feet during your Rage',
              reaction: 'Summon spectral branches',
              savingThrow:
                'Strength saving throw (DC 8 + Strength modifier + Proficiency Bonus)',
              effect:
                'On a failed save, the target is teleported to an unoccupied space you can see within 5 feet of yourself or the nearest unoccupied space you can see. After teleport, reduce target\'s Speed to 0 until the end of the turn.',
            },
          },
        },
        level10: {
          batteringRoots: {
            description:
              'During your turn, your reach is 10 feet greater with any Melee weapon that has the Heavy or Versatile property, as tendrils of the World Tree extend from you. When you hit with such a weapon on your turn, you can activate the Push or Topple mastery property in addition to a different mastery property you\'re using with that weapon.',
            mechanics: {
              reachIncrease:
                '10 feet greater reach with Melee weapons that have the Heavy or Versatile property during your turn',
              hitEffect:
                'Can activate the Push or Topple mastery property in addition to another mastery property when hitting with the specified weapons',
            },
          },
        },
        level14: {
          travelAlongTheTree: {
            description:
              'When you activate your Rage and as a Bonus Action while your Rage is active, you can teleport up to 60 feet to an unoccupied space you can see. In addition, once per Rage, you can increase the range of that teleport to 150 feet.',
            mechanics: {
              activation: 'When Rage is activated and as a Bonus Action during Rage',
              teleportRange: 'Up to 60 feet to an unoccupied space you can see',
              enhancedTeleport:
                'Once per Rage, increase teleport range to 150 feet and bring up to six willing creatures within 10 feet',
            },
          },
        },
      },
      zealot: {
        name: 'Path of the Zealot',
        level3: {
          divineFury: {
            description:
              'You can channel divine power into your strikes. On each of your turns while your Rage is active, the first creature you hit with a weapon or an Unarmed Strike takes extra damage.',
            mechanics: {
              condition: 'Must be during your Rage',
              extraDamage:
                '1d6 + half your Barbarian level (round down). Damage type is Necrotic or Radiant (your choice each time)',
            },
          },
          warriorOfTheGods: {
            description:
              'A divine entity helps ensure you can continue the fight. You have a pool of four d12s that you can spend to heal yourself.',
            mechanics: {
              healingPool: 'Four d12s',
              activation: 'Bonus Action',
              effect:
                'Expend dice from the pool, roll them, and regain HP equal to the total. Pool regains all dice on a Long Rest.',
              poolIncrease:
                'Pool increases by one die at Barbarian levels 6 (5 dice), 12 (6 dice), and 17 (7 dice).',
            },
          },
        },
        level6: {
          fanaticalFocus: {
            description:
              'Once per active Rage, if you fail a saving throw, you can reroll it with a bonus equal to your Rage Damage bonus, and you must use the new roll.',
            mechanics: {
              trigger: 'Failing a saving throw',
              effect:
                'Reroll the saving throw with a bonus equal to your Rage Damage bonus (must use the new roll).',
              usage: 'Once per active Rage',
            },
          },
        },
        level10: {
          zealousPresence: {
            description:
              'As a Bonus Action, you unleash a battle cry infused with divine energy. Up to ten other creatures of your choice within 60 feet of you gain Advantage on attack rolls and saving throws until the start of your next turn.',
            mechanics: {
              activation: 'Bonus Action',
              range: '60 feet',
              effect:
                'Up to ten creatures of your choice gain Advantage on attack rolls and saving throws until the start of your next turn.',
              usage: 'Once per Long Rest, or expend a use of Rage to use again',
            },
          },
        },
        level14: {
          rageOfTheGods: {
            description:
              'When you activate your Rage, you can assume the form of a divine warrior. This form lasts for 1 minute or until you drop to 0 Hit Points.',
            mechanics: {
              activation: 'When Rage is activated',
              duration: '1 minute or until HP drops to 0',
              usage: 'Once per Long Rest',
              effects: {
                flight: 'Fly Speed equal to your Speed and can hover',
                resistance: 'Resistance to Necrotic, Psychic, and Radiant damage',
                revivification:
                  'When a creature within 30 feet would drop to 0 HP, expend a use of Rage (Reaction) to change target’s HP to your Barbarian level instead',
              },
            },
          },
        },
      },
    },
  },
  level4: {
    abilityScoreImprovement: {
      description:
        'You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.',
      mechanics: {
        options: ['Ability Score Improvement feat', 'Any other feat for which you qualify'],
      },
    },
  },
  level5: {
    extraAttack: {
      description:
        'You can attack twice instead of once whenever you take the Attack action on your turn.',
      mechanics: {
        attackAction: 'Attack twice instead of once',
      },
    },
    fastMovement: {
      description:
        'Your speed increases by 10 feet while you aren\'t wearing Heavy armor.',
      mechanics: {
        armorRestriction: 'Not wearing Heavy armor',
        speedIncrease: '+10 feet to speed',
      },
    },
  },
  level7: {
    feralInstinct: {
      description: 'Your instincts are so honed that you have Advantage on Initiative rolls.',
      mechanics: {
        initiativeRolls: 'Advantage on Initiative rolls',
      },
    },
    instinctivePounce: {
      description:
        'As part of the Bonus Action you take to enter your Rage, you can move up to half your Speed.',
      mechanics: {
        activation: 'Part of the Bonus Action to enter Rage',
        movement: 'Move up to half your Speed',
      },
    },
  },
  level9: {
    brutalStrike: {
      description:
        'If you use Reckless Attack, you can forgo any Advantage on one Strength-based attack roll of your choice on your turn. The chosen attack roll mustn\'t have Disadvantage. If the chosen attack roll hits, the target takes an extra 1d10 damage of the same type dealt by the weapon or Unarmed Strike, and you can cause one Brutal Strike effect of your choice.',
      mechanics: {
        activation: 'Must use Reckless Attack',
        advantageForgo: 'Can forgo Advantage on one Strength-based attack roll',
        attackRollRestriction: 'Chosen attack roll must not have Disadvantage',
        hitEffect: 'Target takes an extra 1d10 damage of the same type',
        effects: {
          forcefulBlow:
            'The target is pushed 15 feet straight away from you. You can then move up to half your Speed straight toward the target without provoking Opportunity Attacks.',
          hamstringBlow:
            'The target’s Speed is reduced by 15 feet until the start of your next turn. A target can be affected by only one Hamstring Blow at a time— the most recent one.',
        },
      },
    },
  },
  level11: {
    relentlessRage: {
      description:
        'Your Rage can keep you fighting despite grievous wounds. If you drop to 0 Hit Points while your Rage is active and don\'t die outright, you can make a DC 10 Constitution saving throw. If you succeed, your Hit Points instead change to a number equal to twice your Barbarian level.',
      mechanics: {
        trigger: 'Drop to 0 Hit Points while Rage is active',
        savingThrow: 'DC 10 Constitution saving throw',
        successEffect: 'Hit Points change to twice your Barbarian level',
        dcIncrease:
          'Each use after the first increases the DC by 5. Resets to 10 on a Short or Long Rest.',
      },
    },
  },
  level13: {
    improvedBrutalStrike: {
      description:
        'You have honed new ways to attack furiously. The following effects are now among your Brutal Strike options.',
      mechanics: {
        newEffects: {
          staggeringBlow:
            'The target has Disadvantage on the next saving throw it makes, and it can’t make Opportunity Attacks until the start of your next turn.',
          sunderingBlow:
            'Before the start of your next turn, the next attack roll made by another creature against the target gains a +5 bonus to the roll. An attack roll can gain only one Sundering Blow bonus.',
        },
      },
    },
  },
  level15: {
    persistentRage: {
      description:
        'When you roll Initiative, you can regain all expended uses of Rage. After you regain uses of Rage in this way, you can’t do so again until you finish a Long Rest.\n' +
        '\n' +
        'In addition, your Rage is so fierce that it now lasts for 10 minutes without you needing to do anything to extend it from round to round. Your Rage ends early if you have the Unconscious condition (not just the Incapacitated condition) or don Heavy armor.',
      mechanics: {
        initiativeEffect: 'Regain all expended uses of Rage (once per Long Rest)',
        rageDuration: 'Rage lasts for 10 minutes without needing to extend',
        rageEndCondition: 'Ends early if Unconscious or wearing Heavy armor',
      },
    },
  },
  level16: {
    abilityScoreImprovement: {
      description:
        'You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.',
      mechanics: {
        options: ['Ability Score Improvement feat', 'Any other feat for which you qualify'],
      },
    },
  },
  level17: {
    improvedBrutalStrike: {
      description:
        'The extra damage of your Brutal Strike increases to 2d10. In addition, you can use two different Brutal Strike effects whenever you use your Brutal Strike feature.',
      mechanics: {
        brutalStrikeDamage: 'Extra damage increases to 2d10',
        brutalStrikeEffects: 'Can use two different Brutal Strike effects',
      },
    },
  },
  level18: {
    indomitableMight: {
      description:
        'If your total for a Strength check or Strength saving throw is less than your Strength score, you can use that score in place of the total.',
      mechanics: {
        strengthChecksAndSaves:
          'If total is less than Strength score, use Strength score instead',
      },
    },
  },
  level19: {
    epicBoon: {
      description:
        'You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Irresistible Offense is recommended.',
      mechanics: {
        epicBoon: 'Gain an Epic Boon feat or any other feat for which you qualify',
        recommendation: 'Boon of Irresistible Offense',
      },
    },
  },
  level20: {
    primalChampion: {
      description: 'You embody primal power. Your Strength and Constitution scores increase by 4, to a maximum of 25.',
      mechanics: {
        strengthIncrease: 'Strength increases by 4, to a maximum of 25',
        constitutionIncrease: 'Constitution increases by 4, to a maximum of 25',
      },
    },
  },
};

export default barbarian;