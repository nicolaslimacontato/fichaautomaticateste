// ficha-automatica/src/equipment/mundane-items.ts

interface Tool {
  name: string;
  ability: string;
  weight: number | string;
  cost: number;
  utilize: string;
  craft?: string;
}

const tools = [
  {
    name: "Alchemist's Supplies",
    ability: "Intelligence",
    weight: 8,
    cost: 50,
    utilize: "Identify a substance (DC 15), or start a fire (DC 15)",
    craft: "Acid, Alchemist’s Fire, Component Pouch, Oil, Paper, Perfume",
  },
  {
    name: "Brewer's Supplies",
    ability: "Intelligence",
    weight: 9,
    cost: 20,
    utilize: "Detect poisoned drink (DC 15), or identify alcohol (DC 10)",
    craft: "Antitoxin",
  },
  {
    name: "Calligrapher's Supplies",
    ability: "Dexterity",
    weight: 5,
    cost: 10,
    utilize: "Write text with impressive flourishes that guard against forgery (DC 15)",
    craft: "Ink, Spell Scroll",
  },
  {
    name: "Carpenter's Tools",
    ability: "Strength",
    weight: 6,
    cost: 8,
    utilize: "Seal or pry open a door or container (DC 20)",
    craft: "Club, Greatclub, Quarterstaff, Barrel, Chest, Ladder, Pole, Portable Ram, Torch",
  },
  {
    name: "Cartographer's Tools",
    ability: "Wisdom",
    weight: 6,
    cost: 15,
    utilize: "Draft a map of a small area (DC 15)",
    craft: "Map",
  },
  {
    name: "Cobbler's Tools",
    ability: "Dexterity",
    weight: 5,
    cost: 5,
    utilize: "Modify footwear to give Advantage on the wearer’s next Dexterity (Acrobatics) check (DC 10)",
    craft: "Climber’s Kit",
  },
  {
    name: "Cook's Utensils",
    ability: "Wisdom",
    weight: 8,
    cost: 1,
    utilize: "Improve food’s flavor (DC 10), or detect spoiled or poisoned food (DC 15)",
    craft: "Rations",
  },
  {
    name: "Glassblower's Tools",
    ability: "Intelligence",
    weight: 5,
    cost: 30,
    utilize: "Discern what a glass object held in the past 24 hours (DC 15)",
    craft: "Glass Bottle, Magnifying Glass, Spyglass, Vial",
  },
  {
    name: "Jeweler's Tools",
    ability: "Intelligence",
    weight: 2,
    cost: 25,
    utilize: "Discern a gem’'s value (DC 15)",
    craft: "Arcane Focus, Holy Symbol",
  },
  {
    name: "Leatherworker's Tools",
    ability: "Dexterity",
    weight: 5,
    cost: 5,
    utilize: "Add a design to a leather item (DC 10)",
    craft: "Sling, Whip, Hide Armor, Leather Armor, Studded Leather Armor, Backpack, Crossbow Bolt Case, Map or Scroll Case, Parchment, Pouch, Quiver, Waterskin",
  },
  {
    name: "Mason's Tools",
    ability: "Strength",
    weight: 8,
    cost: 10,
    utilize: "Chisel a symbol or hole in stone (DC 10)",
    craft: "Block and Tackle",
  },
  {
    name: "Painter's Supplies",
    ability: "Wisdom",
    weight: 5,
    cost: 10,
    utilize: "Paint a recognizable image of something you've seen (DC 10)",
    craft: "Druidic Focus, Holy Symbol",
  },
  {
    name: "Potter's Tools",
    ability: "Intelligence",
    weight: 3,
    cost: 10,
    utilize: "Discern what a ceramic object held in the past 24 hours (DC 15)",
    craft: "Jug, Lamp",
  },
  {
    name: "Smith's Tools",
    ability: "Strength",
    weight: 8,
    cost: 20,
    utilize: "Pry open a door or container (DC 20)",
    craft: "Any Melee weapon (except Club, Greatclub, Quarterstaff, and Whip), Medium armor (except Hide), Heavy armor, Ball Bearings, Bucket, Caltrops, Chain, Crowbar, Firearm Bullets, Grappling Hook, Iron Pot, Iron Spikes, Sling Bullets",
  },
  {
    name: "Tinker's Tools",
    ability: "Dexterity",
    weight: 10,
    cost: 50,
    utilize: "Assemble a Tiny item composed of scrap, which falls apart in 1 minute (DC 20)",
    craft: "Musket, Pistol, Bell, Bullseye Lantern, Flask, Hooded Lantern, Hunting Trap, Lock, Manacles, Mirror, Shovel, Signal Whistle, Tinderbox",
  },
  {
    name: "Weaver's Tools",
    ability: "Dexterity",
    weight: 5,
    cost: 1,
    utilize: "Mend a tear in clothing (DC 10), or sew a Tiny design (DC 10)",
    craft: "Padded Armor, Basket, Bedroll, Blanket, Fine Clothes, Net, Robe, Rope, Sack, String, Tent, Traveler's Clothes",
  },
  {
    name: "Woodcarver's Tools",
    ability: "Dexterity",
    weight: 5,
    cost: 1,
    utilize: "Carve a pattern in wood (DC 10)",
    craft: "Club, Greatclub, Quarterstaff, Ranged weapons (except Pistol, Musket, and Sling), Arcane Focus, Arrows, Bolts, Druidic Focus, Ink Pen, Needles",
  },
];

const otherTools = [
  {
    name: "Disguise Kit",
    ability: "Charisma",
    weight: 3,
    cost: 25,
    utilize: "Apply makeup (DC 10)",
    craft: "Costume",
  },
  {
    name: "Forgery Kit",
    ability: "Dexterity",
    weight: 5,
    cost: 15,
    utilize:
      "Mimic 10 or fewer words of someone else's handwriting (DC 15), or duplicate a wax seal (DC 20)",
  },
  {
    name: "Herbalism Kit",
    ability: "Intelligence",
    weight: 3,
    cost: 5,
    utilize: "Identify a plant (DC 10)",
    craft: "Antitoxin, Candle, Healer’s Kit, Potion of Healing",
  },
  {
    name: "Navigator's Tools",
    ability: "Wisdom",
    weight: 2,
    cost: 25,
    utilize: "Plot a course (DC 10), or determine position by stargazing (DC 15)",
  },
  {
    name: "Poisoner's Kit",
    ability: "Intelligence",
    weight: 2,
    cost: 50,
    utilize: "Detect a poisoned object (DC 10)",
    craft: "Basic Poison",
  },
  {
    name: "Thieves' Tools",
    ability: "Dexterity",
    weight: 1,
    cost: 25,
    utilize: "Pick a lock (DC 15), or disarm a trap (DC 15)",
  },
];

const gamingSets = [
  {
    name: "Dice",
    ability: "Wisdom",
    weight: "-",
    cost: 0.1,
    utilize: "Discern whether someone is cheating (DC 10), or win the game (DC 20)",
  },
  {
    name: "Dragonchess",
    ability: "Wisdom",
    weight: "-",
    cost: 1,
    utilize: "Discern whether someone is cheating (DC 10), or win the game (DC 20)",
  },
  {
    name: "Playing Cards",
    ability: "Wisdom",
    weight: "-",
    cost: 0.5,
    utilize: "Discern whether someone is cheating (DC 10), or win the game (DC 20)",
  },
  {
    name: "Three-dragon Ante",
    ability: "Wisdom",
    weight: "-",
    cost: 1,
    utilize: "Discern whether someone is cheating (DC 10), or win the game (DC 20)",
  },
];

const musicalInstruments = [
  {
    name: "Bagpipes",
    ability: "Charisma",
    weight: 6,
    cost: 30,
    utilize: "Play a known tune (DC 10), or improvise a song (DC 15)",
  },
  {
    name: "Drum",
    ability: "Charisma",
    weight: 3,
    cost: 6,
    utilize: "Play a known tune (DC 10), or improvise a song (DC 15)",
  },
  {
    name: "Dulcimer",
    ability: "Charisma",
    weight: 10,
    cost: 25,
    utilize: "Play a known tune (DC 10), or improvise a song (DC 15)",
  },
  {
    name: "Flute",
    ability: "Charisma",
    weight: 1,
    cost: 2,
    utilize: "Play a known tune (DC 10), or improvise a song (DC 15)",
  },
  {
    name: "Horn",
    ability: "Charisma",
    weight: 2,
    cost: 3,
    utilize: "Play a known tune (DC 10), or improvise a song (DC 15)",
  },
  {
    name: "Lute",
    ability: "Charisma",
    weight: 2,
    cost: 35,
    utilize: "Play a known tune (DC 10), or improvise a song (DC 15)",
  },
  {
    name: "Lyre",
    ability: "Charisma",
    weight: 2,
    cost: 30,
    utilize: "Play a known tune (DC 10), or improvise a song (DC 15)",
  },
  {
    name: "Pan Flute",
    ability: "Charisma",
    weight: 2,
    cost: 12,
    utilize: "Play a known tune (DC 10), or improvise a song (DC 15)",
  },
  { name: "Shawm", ability: "Charisma", weight: 1, cost: 2, utilize: "Play a known tune (DC 10), or improvise a song (DC 15)" },
  { name: "Viol", ability: "Charisma", weight: 1, cost: 30, utilize: "Play a known tune (DC 10), or improvise a song (DC 15)" },
];

interface MountAndVehicle {
  name: string;
  cost: number;
  speed?: string;
  capacity?: string;
}

const mountsAndVehicles: MountAndVehicle[] = [
  { name: "Donkey or Mule", cost: 8, speed: "40 ft." },
  { name: "Horse (riding)", cost: 75, speed: "60 ft." },
  { name: "Warhorse", cost: 400, speed: "60 ft." },
  { name: "Cart", cost: 15, capacity: "200 lb." },
  { name: "Wagon", cost: 35, capacity: "500 lb." },
];



interface Poison {
  name: string;
  type: string;
  cost: number;
  effect: string;
}

const poisons: Poison[] = [
  {
    name: "Basic Poison",
    type: "Contact",
    cost: 100,
    effect:
      "A creature subjected to this poison must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. The poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
  },
  {
    name: "Deathblade",
    type: "Ingested",
    cost: 3000,
    effect:
      "A creature subjected to this poison must make a DC 20 Constitution saving throw, taking 12d6 poison damage on a failed save, or half as much damage on a successful one.",
  },
  {
    name: "Ingested Poison",
    type: "Ingested",
    cost: 400,
    effect:
      "A creature subjected to this poison must succeed on a DC 12 Constitution saving throw or take 3d6 poison damage and become poisoned for 1 hour. The poisoned creature is incapacitated.",
  },
  {
    name: "Injury Poison",
    type: "Injury",
    cost: 1000,
    effect:
      "A creature subjected to this poison must succeed on a DC 13 Constitution saving throw or take 2d10 poison damage and become poisoned. The poisoned creature must repeat the saving throw every 24 hours, taking 2d10 poison damage on a failed save. This poison continues until the creature succeeds on the saving throw twice.",
  },
  {
    name: "Inhaled Poison",
    type: "Inhaled",
    cost: 500,
    effect:
      "A creature subjected to this poison must succeed on a DC 15 Constitution saving throw or take 5d6 poison damage and become poisoned for 1 hour. The poisoned creature is incapacitated.",
  },
];

export {
  tools,
  otherTools,
  gamingSets,
  musicalInstruments,
  poisons,
};