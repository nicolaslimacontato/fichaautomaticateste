// b/ficha-automatica/src/equipment/weapons/mastery/weapons.ts
interface MasteryProperty {
  name: string;
  description: string;
}

const masteryProperties: Record<string, MasteryProperty> = {
  Cleave: {
    name: "Cleave",
    description:
      "If you hit a creature with a melee attack roll using this weapon, you can make a melee attack roll with the weapon against a second creature within 5 feet of the first that is also within your reach. On a hit, the second creature takes the weapon’s damage, but don't add your ability modifier to that damage unless that modifier is negative. You can make this extra attack only once per turn.",
  },
  Graze: {
    name: "Graze",
    description:
      "If your attack roll with this weapon misses a creature, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. This damage is the same type dealt by the weapon, and the damage can be increased only by increasing the ability modifier.",
  },
  Nick: {
    name: "Nick",
    description:
      "When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action. You can make this extra attack only once per turn.",
  },
  Push: {
    name: "Push",
    description:
      "If you hit a creature with this weapon, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller.",
  },
  Sap: {
    name: "Sap",
    description:
      "If you hit a creature with this weapon, that creature has Disadvantage on its next attack roll before the start of your next turn.",
  },
  Slow: {
    name: "Slow",
    description:
      "If you hit a creature with this weapon and deal damage to it, you can reduce its Speed by 10 feet until the start of your next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn’t exceed 10 feet.",
  },
  Topple: {
    name: "Topple",
    description:
      "If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.",
  },
  Vex: {
    name: "Vex",
    description:
      "If you hit a creature with this weapon and deal damage to the creature, you have Advantage on your next attack roll against that creature before the end of your next turn.",
  },
};

export default masteryProperties;
