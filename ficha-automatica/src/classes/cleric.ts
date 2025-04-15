const cleric = {
  name: "Cleric",
  description:
    "Clerics draw power from the realms of the gods and harness it to work miracles. Blessed by a deity, a pantheon, or another immortal entity, a Cleric can reach out to the divine magic of the Outer Planes—where gods dwell—and channel it to bolster people and battle foes.",
  coreTraits: {
    primaryAbility: "Wisdom",
    hitPointDie: "D8",
    savingThrowProficiencies: ["Wisdom", "Charisma"],
    skillProficiencies: [
      "History",
      "Insight",
      "Medicine",
      "Persuasion",
      "Religion",
    ], // Choose 2
    weaponProficiencies: ["Simple weapons"],
    armorTraining: ["Light armor", "Medium armor", "Shields"],
    startingEquipment: {
      choices: [
        {
          description: "A",
          items: [
            "Chain Shirt",
            "Shield",
            "Mace",
            "Holy Symbol",
            "Priest's Pack",
          ],
          gp: 7,
        },
        {
          description: "B",
          gp: 110,
        },
      ],
    },
  },
  level1: {
    spellcasting: {
      description:
        "You have learned to cast spells through prayer and meditation.",
      cantrips: {
        known: 3,
        description:
          "You know three cantrips of your choice from the Cleric spell list.",
        recommended: ["Guidance", "Sacred Flame", "Thaumaturgy"],
      },
      spellSlots: {
        level1: 2,
        // The table provides spell slots for higher levels, but we only need level 1 for now.
      },
      preparedSpells: {
        level1: 4,
        description:
          "You prepare the list of level 1+ spells that are available for you to cast with this feature.",
        recommended: ["Bless", "Cure Wounds", "Guiding Bolt", "Shield of Faith"],
      },
      changingPreparedSpells: {
        description:
          "Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Cleric spells for which you have spell slots.",
      },
      spellcastingAbility: "Wisdom",
      spellcastingFocus: "Holy Symbol",
    },
    divineOrder: {
      description:
        "You have dedicated yourself to one of the following sacred roles of your choice.",
      choices: ["Protector", "Thaumaturge"],
      protector: {
        description:
          "Trained for battle, you gain proficiency with Martial weapons and training with Heavy armor.",
        weaponProficiencies: ["Martial weapons"],
        armorTraining: ["Heavy armor"],
      },
      thaumaturge: {
        description:
          "You know one extra cantrip from the Cleric spell list. In addition, your mystical connection to the divine gives you a bonus to your Intelligence (Arcana or Religion) checks.",
        extraCantrip: 1,
        skillBonus: ["Arcana", "Religion"], // Choose 1, bonus equals Wisdom modifier (min +1)
      },
    },
  },
  level2: {
    channelDivinity: {
      description:
        "You can channel divine energy directly from the Outer Planes to fuel magical effects. You start with two such effects: Divine Spark and Turn Undead.",
      uses: 2,
      regainShortRest: 1,
      regainLongRest: "all",
      //The table indicates higher level uses, but only 2 at level 2
      divineSpark: {
        description:
          "As a Magic action, you point your Holy Symbol at another creature you can see within 30 feet of yourself and focus divine energy at it.",
        mechanics:
          "Roll 1d8 and add your Wisdom modifier. You either restore Hit Points to the creature equal to that total or force the creature to make a Constitution saving throw. On a failed save, the creature takes Necrotic or Radiant damage (your choice) equal to that total. On a successful save, the creature takes half as much damage (round down).",
        damageOrHealing: "1d8 + Wisdom modifier",
        save: "Constitution",
        damageType: ["Necrotic", "Radiant"], //Choose one
        range: 30,
      },
      turnUndead: {
        description:
          "As a Magic action, you present your Holy Symbol and censure Undead creatures.",
        mechanics:
          "Each Undead of your choice within 30 feet of you must make a Wisdom saving throw. If the creature fails its save, it has the Frightened and Incapacitated conditions for 1 minute. For that duration, it tries to move as far from you as it can on its turns. This effect ends early on the creature if it takes any damage, if you have the Incapacitated condition, or if you die.",
        save: "Wisdom",
        range: 30,
        conditions: ["Frightened", "Incapacitated"],
        duration: "1 minute",
      },
    },
  },
  level3: {
    clericSubclass: {
      description:
        "You gain a Cleric subclass of your choice. The Life Domain, Light Domain, Trickery Domain, and War Domain subclasses grant you features at certain Cleric levels.",
      choices: ["Life Domain", "Light Domain", "Trickery Domain", "War Domain"],
      lifeDomain: {
        description:
          "The Life Domain focuses on the positive energy that helps sustain all life in the multiverse. Clerics who tap into this domain are masters of healing, using that life force to cure many hurts.",
        level3: {
          discipleOfLife: {
            description:
              "When a spell you cast with a spell slot restores Hit Points to a creature, that creature regains additional Hit Points on the turn you cast the spell. The additional Hit Points equal 2 plus the spell slot’s level.",
            mechanics:
              "Additional healing equal to 2 + spell slot level when casting a healing spell.",
          },
          lifeDomainSpells: {
            description:
              "Your connection to this divine domain ensures you always have certain spells prepared.",
            spells: {
              3: ["Aid", "Bless", "Cure Wounds", "Lesser Restoration"],
              5: ["Mass Healing Word", "Revivify"],
              7: ["Aura of Life", "Death Ward"],
              9: ["Greater Restoration", "Mass Cure Wounds"],
            },
          },
          preserveLife: {
            description:
              "As a Magic action, you present your Holy Symbol and expend a use of your Channel Divinity to evoke healing energy that can restore a number of Hit Points equal to five times your Cleric level. Choose Bloodied creatures within 30 feet of yourself (which can include you), and divide those Hit Points among them. This feature can restore a creature to no more than half its Hit Point maximum.",
            mechanics:
              "Channel Divinity: Restore HP equal to 5 x Cleric level to Bloodied creatures within 30 feet (max half HP).",
            action: "Magic Action",
            channelDivinityCost: 1,
            range: 30,
          },
        },
        level6: {
          blessedHealer: {
            description:
              "The healing spells you cast on others heal you as well. Immediately after you cast a spell with a spell slot that restores Hit Points to one or more creatures other than yourself, you regain Hit Points equal to 2 plus the spell slot’s level.",
            mechanics:
              "You regain HP equal to 2 + spell slot level when you cast a healing spell on others.",
          },
        },
        level17: {
          supremeHealing: {
            description:
              "When you would normally roll one or more dice to restore Hit Points to a creature with a spell or Channel Divinity, don’t roll those dice for the healing; instead use the highest number possible for each die.",
            mechanics:
              "Maximize healing dice for spells and Channel Divinity effects.",
          },
        },
      },
      lightDomain: {
        description:
          "The Light Domain emphasizes the divine power to bring about blazing fire and revelation. Clerics who wield this power are enlightened souls infused with radiance and the power of their deities’ discerning vision, charged with chasing away lies and burning away darkness.",
        level3: {
          lightDomainSpells: {
            description:
              "Your connection to this divine domain ensures you always have certain spells prepared.",
            spells: {
              3: ["Burning Hands", "Faerie Fire", "Scorching Ray", "See Invisibility"],
              5: ["Daylight", "Fireball"],
              7: ["Arcane Eye", "Wall of Fire"],
              9: ["Flame Strike", "Scrying"],
            },
          },
          radianceOfTheDawn: {
            description:
              "As a Magic action, you present your Holy Symbol and expend a use of your Channel Divinity to emit a flash of light in a 30-foot Emanation originating from yourself. Any magical Darkness—such as that created by the Darkness spell—in that area is dispelled. Additionally, each creature of your choice in that area must make a Constitution saving throw, taking Radiant damage equal to 2d10 plus your Cleric level on a failed save or half as much damage on a successful one.",
            mechanics:
              "Channel Divinity: Emit light in 30-foot emanation, dispelling magical darkness. Creatures in the area make a Constitution save, taking 2d10 + Cleric level Radiant damage (half on success).",
            action: "Magic Action",
            channelDivinityCost: 1,
            range: 30,
            save: "Constitution",
            damage: "2d10 + Cleric level",
            damageType: "Radiant",
          },
          wardingFlare: {
            description:
              "When a creature that you can see within 30 feet of yourself makes an attack roll, you can take a Reaction to impose Disadvantage on the attack roll, causing light to flare before it hits or misses.",
            mechanics:
              "Reaction: Impose Disadvantage on an attack roll by a creature within 30 feet. Usable a number of times equal to your Wisdom modifier (minimum of once), regain all on a Long Rest.",
            action: "Reaction",
            range: 30,
            uses: "Wisdom modifier (min 1)",
            regain: "Long Rest",
          },
        },
        level6: {
          improvedWardingFlare: {
            description:
              "You regain all expended uses of your Warding Flare when you finish a Short or Long Rest. In addition, whenever you use Warding Flare, you can give the target of the triggering attack a number of Temporary Hit Points equal to 2d6 plus your Wisdom modifier.",
            mechanics:
              "Warding Flare recharges on Short or Long Rest. Grants Temp HP equal to 2d6 + Wisdom modifier to the attacker.",
            regain: "Short or Long Rest",
            tempHP: "2d6 + Wisdom modifier",
          },
        },
        level17: {
          coronaOfLight: {
            description:
              "As a Magic action, you cause yourself to emit an aura of sunlight that lasts for 1 minute or until you dismiss it (no action required). You emit Bright Light in a 60-foot radius and Dim Light for an additional 30 feet. Your enemies in the Bright Light have Disadvantage on saving throws against your Radiance of the Dawn and any spell that deals Fire or Radiant damage.",
            mechanics:
              "Action: Emit sunlight aura (Bright Light 60ft, Dim Light 90ft) for 1 minute. Enemies in Bright Light have Disadvantage on saves against Radiance of the Dawn and Fire/Radiant spells. Usable a number of times equal to your Wisdom modifier (minimum of once), regain all on a Long Rest.",
            action: "Magic Action",
            duration: "1 minute",
            light: "Bright Light 60ft, Dim Light 90ft",
            effect:
              "Enemies in Bright Light have Disadvantage on saves against Radiance of the Dawn and Fire/Radiant spells.",
            uses: "Wisdom modifier (min 1)",
            regain: "Long Rest",
          },
        },
      },
      trickeryDomain: {
        description:
          "The Trickery Domain offers magic of deception, illusion, and stealth. Clerics who wield this magic are a disruptive force in the world, puncturing pride, mocking tyrants, freeing captives, and flouting hollow traditions. They prefer subterfuge and pranks to direct confrontation.",
        level3: {
          blessingOfTheTrickster: {
            description:
              "As a Magic action, you can choose yourself or a willing creature within 30 feet of yourself to have Advantage on Dexterity (Stealth) checks. This blessing lasts until you finish a Long Rest or you use this feature again.",
            mechanics:
              "Action: Grant Advantage on Dexterity (Stealth) checks to self or willing creature within 30 feet. Lasts until Long Rest or used again.",
            action: "Magic Action",
            range: 30,
            duration: "Until Long Rest or used again",
            skill: "Dexterity (Stealth)",
          },
          trickeryDomainSpells: {
            description:
              "Your connection to this divine domain ensures you always have certain spells ready.",
            spells: {
              3: ["Charm Person", "Disguise Self", "Invisibility", "Pass without Trace"],
              5: ["Hypnotic Pattern", "Nondetection"],
              7: ["Confusion", "Dimension Door"],
              9: ["Dominate Person", "Modify Memory"],
            },
          },
          invokeDuplicity: {
            description:
              "As a Bonus Action, you can expend one use of your Channel Divinity to create a perfect visual illusion of yourself in an unoccupied space you can see within 30 feet of yourself. The illusion is intangible and doesn’t occupy its space. It lasts for 1 minute, but it ends early if you dismiss it (no action required) or have the Incapacitated condition. The illusion is animated and mimics your expressions and gestures. While it persists, you gain the following benefits:\n\nCast Spells. You can cast spells as though you were in the illusion’s space, but you must use your own senses.\nDistract. When both you and your illusion are within 5 feet of a creature that can see the illusion, you have Advantage on attack rolls against that creature, given how distracting the illusion is to the target.\nMove. As a Bonus Action, you can move the illusion up to 30 feet to an unoccupied space you can see that is within 120 feet of yourself.",
            mechanics:
              "Channel Divinity: Create illusion of self within 30 feet for 1 minute. Can cast spells from illusion's space and gain Advantage on attacks against creatures within 5 feet of illusion. Move illusion 30 feet as a Bonus Action.",
            action: "Bonus Action",
            channelDivinityCost: 1,
            range: 30,
            duration: "1 minute",
            illusionControl: "Bonus Action",
          },
        },
        level6: {
          trickstersTransposition: {
            description:
              "Whenever you take the Bonus Action to create or move the illusion of your Invoke Duplicity, you can teleport, swapping places with the illusion.",
            mechanics:
              "Teleport, swapping places with Invoke Duplicity illusion when creating or moving it.",
            trigger: "Invoke Duplicity (Bonus Action)",
            effect: "Teleport, swapping places with illusion",
          },
        },
        level17: {
          improvedDuplicity: {
            description:
              "The illusion of your Invoke Duplicity has grown more powerful in the following ways:\n\nShared Distraction. When you and your allies make attack rolls against a creature within 5 feet of the illusion, the attack rolls have Advantage.\nHealing Illusion. When the illusion ends, you or a creature of your choice within 5 feet of it regains a number of Hit Points equal to your Cleric level.",
            mechanics:
              "Invoke Duplicity illusion grants Advantage on attacks from allies within 5 feet. Heals self or ally within 5 feet for Cleric level HP when illusion ends.",
            sharedDistraction: "Allies gain Advantage on attacks against creatures within 5 feet of the illusion",
            healingIllusion: "Heals self or ally within 5 feet for Cleric level HP when illusion ends",
          },
        },
      },
      warDomain: {
        description:
          "War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. Clerics who tap into the magic of the War Domain excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers.",
        level3: {
          guidedStrike: {
            description:
              "When you or a creature within 30 feet of you misses with an attack roll, you can expend one use of your Channel Divinity and give that roll a +10 bonus, potentially causing it to hit. When you use this feature to benefit another creature’s attack roll, you must take a Reaction to do so.",
            mechanics:
              "Channel Divinity: Grant +10 to an attack roll within 30 feet, potentially turning a miss into a hit. Reaction required for others.",
            action: "Reaction (for others)",
            channelDivinityCost: 1,
            range: 30,
            bonus: "+10 to attack roll",
          },
          warDomainSpells: {
            description:
              "Your connection to this divine domain ensures you always have certain spells ready.",
            spells: {
              3: ["Guiding Bolt", "Magic Weapon", "Shield of Faith", "Spiritual Weapon"],
              5: ["Crusader's Mantle", "Spirit Guardians"],
              7: ["Fire Shield", "Freedom of Movement"],
              9: ["Hold Monster", "Steel Wind Strike"],
            },
          },
          warPriest: {
            description:
              "As a Bonus Action, you can make one attack with a weapon or an Unarmed Strike. You can use this Bonus Action a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a Short or Long Rest.",
            mechanics:
              "Bonus Action: Make one weapon or unarmed attack. Usable a number of times equal to your Wisdom modifier (min 1), regain all on Short or Long Rest.",
            action: "Bonus Action",
            attack: "Weapon or Unarmed Strike",
            uses: "Wisdom modifier (min 1)",
            regain: "Short or Long Rest",
          },
        },
        level6: {
          warGodsBlessing: {
            description:
              "You can expend a use of your Channel Divinity to cast Shield of Faith or Spiritual Weapon rather than expending a spell slot. When you cast either spell in this way, the spell doesn’t require Concentration. Instead the spell lasts for 1 minute, but it ends early if you cast that spell again, have the Incapacated condition, or die.",
            mechanics:
              "Channel Divinity: Cast Shield of Faith or Spiritual Weapon without expending a spell slot or requiring Concentration. Lasts 1 minute.",
            channelDivinityCost: 1,
            spells: ["Shield of Faith", "Spiritual Weapon"],
            duration: "1 minute (no concentration)",
          },
        },
        level17: {
          avatarOfBattle: {
            description: "You gain Resistance to Bludgeoning, Piercing, and Slashing damage.",
            mechanics: "Resistance to Bludgeoning, Piercing, and Slashing damage.",
            resistances: ["Bludgeoning", "Piercing", "Slashing"],
          },
        },
      },
    },
  },
  level4: {
    abilityScoreImprovement: {
      description:
        "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.",
      mechanics: "Gain Ability Score Improvement feat or another feat.",
    },
  },
  level5: {
    searUndead: {
      description:
        "Whenever you use Turn Undead, you can roll a number of d8s equal to your Wisdom modifier (minimum of 1d8) and add the rolls together. Each Undead that fails its saving throw against that use of Turn Undead takes Radiant damage equal to the roll’s total. This damage doesn’t end the turn effect.",
      mechanics:
        "Undead failing save against Turn Undead take Radiant damage equal to a roll of d8s equal to Wisdom modifier (min 1d8).",
      damage: "Wisdom modifier (min 1) d8s",
      damageType: "Radiant",
      trigger: "Turn Undead",
    },
  },
  level7: {
    blessedStrikes: {
      description:
        "Divine power infuses you in battle. You gain one of the following options of your choice (if you get either option from a Cleric subclass in an older book, use only the option you choose for this feature).",
      choices: ["Divine Strike", "Potent Spellcasting"],
      divineStrike: {
        description:
          "Once on each of your turns when you hit a creature with an attack roll using a weapon, you can cause the target to take an extra 1d8 Necrotic or Radiant damage (your choice).",
        mechanics:
          "Once per turn, deal extra 1d8 Necrotic or Radiant damage on a weapon attack.",
        extraDamage: "1d8",
        damageType: ["Necrotic", "Radiant"], //Choose
        trigger: "Weapon attack",
      },
      potentSpellcasting: {
        description: "Add your Wisdom modifier to the damage you deal with any Cleric cantrip.",
        mechanics: "Add Wisdom modifier to Cleric cantrip damage.",
        extraDamage: "Wisdom modifier",
        trigger: "Cleric cantrip damage",
      },
    },
  },
  level8: {
    abilityScoreImprovement: {
      description:
        "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.",
      mechanics: "Gain Ability Score Improvement feat or another feat.",
    },
  },
  level10: {
    divineIntervention: {
      description:
        "You can call on your deity or pantheon to intervene on your behalf. As a Magic action, choose any Cleric spell of level 5 or lower that doesn’t require a Reaction to cast. As part of the same action, you cast that spell without expending a spell slot or needing Material components. You can’t use this feature again until you finish a Long Rest.",
      mechanics:
        "Action: Cast a Cleric spell of level 5 or lower without a spell slot or components. Usable once per Long Rest.",
      action: "Magic Action",
      spellLevelLimit: 5,
      components: "None",
      cost: "Once per Long Rest",
    },
  },
  level12: {
    abilityScoreImprovement: {
      description:
        "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.",
      mechanics: "Gain Ability Score Improvement feat or another feat.",
    },
  },
  level14: {
    improvedBlessedStrikes: {
      description: "The option you chose for Blessed Strikes grows more powerful.",
      divineStrike: {
        description: "The extra damage of your Divine Strike increases to 2d8.",
        mechanics: "Divine Strike extra damage increases to 2d8.",
        extraDamage: "2d8",
      },
      potentSpellcasting: {
        description:
          "When you cast a Cleric cantrip and deal damage to a creature with it, you can give vitality to yourself or another creature within 60 feet of yourself, granting a number of Temporary Hit Points equal to twice your Wisdom modifier.",
        mechanics:
          "Cleric cantrip damage grants Temporary Hit Points equal to twice Wisdom modifier to self or another creature within 60 feet.",
        tempHP: "2 x Wisdom modifier",
        range: 60,
      },
    },
  },
  level16: {
    abilityScoreImprovement: {
      description:
        "You gain the Ability Score Improvement feat or another feat of your choice for which you qualify.",
      mechanics: "Gain Ability Score Improvement feat or another feat.",
    },
  },
  level19: {
    epicBoon: {
      description:
        "You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Fate is recommended.",
      mechanics: "Gain an Epic Boon feat or another feat.",
      recommendation: "Boon of Fate",
    },
  },
  level20: {
    greaterDivineIntervention: {
      description:
        "You can call on even more powerful divine intervention. When you use your Divine Intervention feature, you can choose Wish when you select a spell. If you do so, you can’t use Divine Intervention again until you finish 2d4 Long Rests.",
      mechanics:
        "Can choose Wish when using Divine Intervention, usable again after 2d4 Long Rests.",
      extraOption: "Wish",
      cost: "2d4 Long Rests after using Wish",
      trigger: "Divine Intervention",
    },
  },
};