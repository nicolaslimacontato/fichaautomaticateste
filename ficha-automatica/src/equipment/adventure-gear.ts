// ficha-automatica/src/equipment/adventure-gear.ts

interface AdventureGearItem {
  name: string;
  cost: string;
  weight: string;
  description: string;
  type?: string;  effect?: string;
}

interface AmmunitionBasic {
  name: string;
  amount: number;
  storage: string;
  weight: string;
  cost: string;
  description: string;
}

export const adventureGear: AdventureGearItem[] = [
  { name: "Abacus", cost: "2 gp", weight: "2 lb.", description: "A frame with rows of counters, used for making calculations." },
  { name: "Acid (vial)", cost: "25 gp", weight: "1 lb.", description: "On a hit, you can substitute one of your attacks to throw a flask of acid at a creature within 30 feet of you. The target must succeed on a Dexterity saving throw (DC 12) or take 2d6 acid damage.", type: "Adventuring Gear", effect: "The target must succeed on a Dexterity saving throw (DC 12) or take 2d6 acid damage." },
  { name: "Alchemist's Fire (flask)", cost: "50 gp", weight: "1 lb.", description: "On a hit, you can substitute one of your attacks to throw a flask of alchemist's fire at a creature within 30 feet of you. The target must succeed on a Dexterity saving throw (DC 12) or take 1d4 fire damage at the start of each of its turns. A creature can end this effect by using its action to make a Dexterity check (DC 10) to extinguish the flames.", type: "Adventuring Gear", effect: "The target must succeed on a Dexterity saving throw (DC 12) or take 1d4 fire damage at the start of each of its turns. A creature can end this effect by using its action to make a Dexterity check (DC 10) to extinguish the flames." },
  { name: "Antitoxin (vial)", cost: "50 gp", weight: "-", description: "A creature who drinks this vial of liquid has advantage on saving throws against poison for 1 hour. It can also be used after being poisoned to end one instance of the poisoned condition.", type: "Adventuring Gear", effect: "A creature who drinks this vial of liquid has advantage on saving throws against poison for 1 hour. It can also be used after being poisoned to end one instance of the poisoned condition." },
  { name: "Backpack", cost: "2 gp", weight: "5 lb.", description: "A leather pack used to carry gear. It can hold up to 30 pounds of gear.", type: "Adventuring Gear" },
  { name: "Blanket", cost: "5 sp", weight: "3 lb.", description: "A large piece of cloth used for warmth. While wrapped in a blanket, you have advantage on saving throws against extreme cold.", type: "Adventuring Gear", effect: "While wrapped in a blanket, you have advantage on saving throws against extreme cold." },
  { name: "Block and Tackle", cost: "1 gp", weight: "5 lb.", description: "A pulley system used to lift heavy objects.", type: "Adventuring Gear" },
  { name: "Book", cost: "25 gp", weight: "5 lb.", description: "A set of written or printed pages, usually bound together between covers." },
  { name: "Bottle, Glass", cost: "2 gp", weight: "2 lb.", description: "A container made of glass." },
  { name: "Bucket", cost: "5 cp", weight: "2 lb.", description: "A pail or container for carrying liquids." },
  { name: "Burglar's Pack", cost: "16 gp", weight: "42 lb.", description: "A set of tools and equipment used by burglars and thieves." },
  { name: "Caltrops (bag of 20)", cost: "1 gp", weight: "2 lb.", description: "As an action, you can spread these metal spikes on the ground. Any creature moving into the area must succeed on a DC 15 Dexterity saving throw or stop moving and take 1d4 piercing damage." },
  { name: "Candle", cost: "1 cp", weight: "-", description: "A wax stick with a wick, used to provide light." },
  { name: "Case, Map or Scroll", cost: "1 gp", weight: "1 lb.", description: "A protective case for maps or scrolls.", type: "Adventuring Gear" },
  { name: "Chain (10 feet)", cost: "10 gp", weight: "10 lb.", description: "A series of linked metal rings." },
  { name: "Chalk (1 piece)", cost: "1 cp", weight: "-", description: "A piece of soft white, typically in stick form, used for writing or drawing." },
  { name: "Chest", cost: "5 gp", weight: "25 lb.", description: "A sturdy box, typically used for storage." },
  { name: "Climber's Kit", cost: "25 gp", weight: "12 lb.", description: "A set of tools and equipment used for climbing." },
  { name: "Clothes, Common", cost: "5 sp", weight: "3 lb.", description: "Ordinary, everyday clothing." },
  { name: "Clothes, Costume", cost: "5 gp", weight: "4 lb.", description: "Clothing designed for disguise or performance." },
  { name: "Clothes, Fine", cost: "15 gp", weight: "6 lb.", description: "High-quality, fashionable clothing." },
  { name: "Clothes, Traveler's", cost: "2 gp", weight: "4 lb.", description: "Sturdy and practical clothing suitable for travel." },
  { name: "Crowbar", cost: "2 gp", weight: "5 lb.", description: "A tool for prying or forcing things open.", type: "Adventuring Gear" },
  { name: "Druidic Focus", cost: "Varies", weight: "-", description: "A natural object, such as a sprig of mistletoe or a holly and mistletoe wand, used as a spellcasting focus by druids.", type: "Equipment" },
  { name: "Dungeon Delver's Pack", cost: "12 gp", weight: "61.5 lb.", description: "A collection of equipment tailored for exploring dungeons." },
  { name: "Diplomat's Pack", cost: "39 gp", weight: "57.5 lb.", description: "A collection of equipment suited for social situations and negotiations." },
  { name: "Entertainer's Pack", cost: "40 gp", weight: "52 lb.", description: "A set of equipment for performers and entertainers." },
  { name: "Explorer's Pack", cost: "10 gp", weight: "59 lb.", description: "A collection of equipment designed for wilderness exploration." },
  { name: "Fishing Tackle", cost: "1 gp", weight: "4 lb.", description: "Equipment used for fishing." },
  { name: "Flask or Tankard", cost: "2 cp", weight: "1 lb.", description: "A container for holding liquids." },
  { name: "Flute", cost: "2 gp", weight: "1 lb.", description: "A woodwind musical instrument.", type: "Adventuring Gear" },
  { name: "Food, Rations (1 day)", cost: "5 sp", weight: "2 lb.", description: "Dried and preserved food suitable for travel.", type: "Adventuring Gear" },
  { name: "Grappling Hook", cost: "2 gp", weight: "4 lb.", description: "A metal hook with multiple prongs, used for climbing or securing ropes.", type: "Adventuring Gear" },
  { name: "Hammer", cost: "1 gp", weight: "3 lb.", description: "A tool with a heavy metal head, used for driving nails or breaking objects." },
  { name: "Hammer, Sledge", cost: "2 gp", weight: "10 lb.", description: "A large, heavy hammer used for breaking stone or driving stakes." },
  { name: "Healer's Kit", cost: "5 gp", weight: "3 lb.", description: "A bag containing bandages, salves, and other supplies used to stabilize wounded creatures.", type: "Adventuring Gear" },
  { name: "Holy Symbol", cost: "Varies", weight: "Varies", description: "A representation of a deity or pantheon, used as a spellcasting focus by clerics and paladins." },
  { name: "Hourglass", cost: "25 gp", weight: "1 lb.", description: "A device with two connected vertical bulbs containing a fine substance that takes an hour to trickle from the top to the bottom." },
  { name: "Hunting Trap", cost: "5 gp", weight: "25 lb.", description: "A mechanical trap designed to capture animals." },
  { name: "Ink (1 ounce bottle)", cost: "10 gp", weight: "-", description: "Colored fluid used for writing or drawing." },
  { name: "Ink Pen", cost: "2 cp", weight: "-", description: "A tool for writing with ink.", type: "Adventuring Gear" },
  { name: "Jar", cost: "2 cp", weight: "-", description: "A jar that holds 4 liters.", type: "Adventuring Gear"},
  { name: "Ladder (10-foot)", cost: "1 sp", weight: "25 lb.", description: "A portable set of rungs between two long pieces of wood or metal, used for climbing." },
  { name: "Lamp", cost: "5 sp", weight: "1 lb.", description: "A lamp holds 1 pint of oil, allowing it to emit light for 6 hours (9 meters of bright light and another 9 meters of dim light).", type: "Adventuring Gear" },
  { name: "Lantern, Bullseye", cost: "10 gp", weight: "2 lb.", description: "A bullseye lantern holds 1 pint of oil, allowing it to emit light for 6 hours (an 18-meter cone of bright light and another 18 meters of dim light).", type: "Adventuring Gear" },
  { name: "Lantern, Hooded", cost: "5 gp", weight: "2 lb.", description: "A hooded lantern holds 1 pint of oil, allowing it to emit light for 6 hours (9 meters of bright light and another 9 meters of dim light). As an action, you can lower the hood, reducing the light to dim light in a radius of 1.5 meters, or lift it again.", type: "Equipment", effect: "As an action, you can lower the hood, reducing the light to dim light in a radius of 1.5 meters, or lift it again." },
  { name: "Lock", cost: "10 gp", weight: "1 lb.", description: "A mechanism for securing a door, chest, or other object.", type: "Adventuring Gear" },
  { name: "Magnifying Glass", cost: "100 gp", weight: "-", description: "A lens that magnifies objects, making them appear larger.", type: "Adventuring Gear" },
  { name: "Map Case", cost: "1 gp", weight: "1 lb.", description: "A protective case for maps or scrolls.", type: "Adventuring Gear" },
  { name: "Mess Kit", cost: "2 sp", weight: "1 lb.", description: "A set of basic eating utensils and cookware.", type: "Adventuring Gear" },
  { name: "Mirror, Steel", cost: "5 gp", weight: "0.5 lb.", description: "A polished metal surface that reflects images.", type: "Adventuring Gear" },
  { name: "Oil (flask)", cost: "1 sp", weight: "1 lb.", description: "A flammable liquid that burns when ignited. It can be used to create a torch or as a component in other items.", type: "Adventuring Gear" },
  { name: "Paper (one sheet)", cost: "2 sp", weight: "-", description: "A thin, flexible material used for writing or printing." },
  { name: "Parchment (one sheet)", cost: "1 sp", weight: "-", description: "A writing material made from animal skin.", type: "Adventuring Gear" },
  { name: "Perfume (vial)", cost: "5 gp", weight: "-", description: "A fragrant liquid used to mask odors or create a pleasant scent.", type: "Adventuring Gear" },
  { name: "Pick, Miner's", cost: "2 gp", weight: "10 lb.", description: "A tool with a pointed end, used for breaking rocks or ore." },
  { name: "Piton", cost: "5 cp", weight: "0.25 lb.", description: "A metal spike with a hole or loop at one end, used to secure a rope or for climbing." },
  { name: "Poison, Basic (vial)", cost: "100 gp", weight: "-", description: "A substance that can be applied to weapons or food to harm or incapacitate a creature.", type: "Adventuring Gear" },
  { name: "Pole (10-foot)", cost: "5 cp", weight: "7 lb.", description: "A long, slender piece of wood or metal.", type: "Adventuring Gear" },
  { name: "Pot, Iron", cost: "2 gp", weight: "10 lb.", description: "A cooking pot made of iron.", type: "Adventuring Gear" },
  { name: "Potion of Healing", cost: "50 gp", weight: "0.5 lb.", description: "A magical potion that restores hit points when consumed.", type: "Adventuring Gear"},
  { name: "Pouch", cost: "5 sp", weight: "1 lb.", description: "A small bag used to carry coins or other small items.", type: "Adventuring Gear" },
  { name: "Quiver", cost: "1 gp", weight: "1 lb.", description: "A container for holding arrows or bolts.", type: "Adventuring Gear" },
  { name: "Ram, Portable", cost: "4 gp", weight: "35 lb.", description: "A tool used to break down doors or other barriers.", type: "Equipment" },
  { name: "Robes", cost: "1 gp", weight: "4 lb.", description: "Loose-fitting outer garments.", type: "Adventuring Gear" },
  { name: "Rope, Hempen (50 feet)", cost: "1 gp", weight: "10 lb.", description: "A sturdy rope made of hemp fibers.", type: "Adventuring Gear" },
  { name: "Rope, Silk (50 feet)", cost: "10 gp", weight: "5 lb.", description: "A lightweight and strong rope made of silk.", type: "Adventuring Gear" },
  { name: "Sack", cost: "1 cp", weight: "0.5 lb.", description: "A bag made of coarse fabric, used for carrying goods.", type: "Adventuring Gear" },
  { name: "Scale, Merchant's", cost: "5 gp", weight: "3 lb.", description: "A balance used to weigh items for trade." },
  { name: "Sealing Wax", cost: "5 sp", weight: "-", description: "A substance that melts when heated and hardens when cooled, used to seal documents or containers." },
  { name: "Shovel", cost: "2 gp", weight: "5 lb.", description: "A tool for digging or moving earth." },
  { name: "Signal Whistle", cost: "5 cp", weight: "-", description: "A small instrument used to produce a piercing sound for signaling." },
  { name: "Signet Ring", cost: "5 gp", weight: "-", description: "A ring engraved with a seal, used to authenticate documents or mark possessions.", type: "Adventuring Gear" },
  { name: "Soap", cost: "2 cp", weight: "-", description: "A cleansing agent used with water.", type: "Adventuring Gear" },
  { name: "Spell Scroll (Cantrip)", cost: "25 gp", weight: "-", description: "A scroll containing a single cantrip spell, which can be cast once and then the scroll is destroyed.", type: "Adventuring Gear"},
  { name: "Spell Scroll (1st Level)", cost: "50 gp", weight: "-", description: "A scroll containing a single 1st-level spell, which can be cast once and then the scroll is destroyed.", type: "Adventuring Gear" },
  { name: "Spikes, Iron (10)", cost: "1 gp", weight: "5 lb.", description: "Metal spikes used to secure ropes, block passages, or create hazards." },
  { name: "Spyglass", cost: "1,000 gp", weight: "1 lb.", description: "A handheld telescope used to view distant objects.", type: "Adventuring Gear" },
  { name: "Tent, Two-Person", cost: "2 gp", weight: "20 lb.", description: "A portable shelter that can accommodate two people.", type: "Adventuring Gear" },
  { name: "Tinderbox", cost: "1 gp", weight: "1 lb.", description: "A kit containing flint, steel, and tinder, used to start fires.", type: "Equipment" },
  { name: "Torch", cost: "1 cp", weight: "1 lb.", description: "A stick of resinous wood that burns with a bright flame, providing light.", type: "Equipment" },
  { name: "Vial", cost: "1 gp", weight: "-", description: "A small glass container, often used for liquids.", type: "Adventuring Gear" },
  { name: "Waterskin", cost: "2 sp", weight: "5 lb. (when full)", description: "A portable container for holding water.", type: "Equipment" },
  { name: "Whetstone", cost: "1 cp", weight: "1 lb.", description: "A fine-grained stone used to sharpen blades.", type: "Adventuring Gear" },
  { name: "Net", cost: "1 gp", weight: "3 lb.", description: "As an action, you can substitute one of your attacks to throw a net at a creature within 10 feet of you. The target must succeed on a Dexterity saving throw (DC 8 + your proficiency bonus + your Dexterity modifier) or become Restrained. A creature can escape the net by using its action to make a Strength (Athletics) check (DC 10). The net has hit points equal to the Strength score of the creature restraining it and can be broken if it takes that much damage.", type: "Adventuring Gear", effect: "The target must succeed on a Dexterity saving throw (DC 8 + your proficiency bonus + your Dexterity modifier) or become Restrained. A creature can escape the net by using its action to make a Strength (Athletics) check (DC 10). The net has hit points equal to the Strength score of the creature restraining it and can be broken if it takes that much damage." },
  { name: "Fine Clothes", cost: "15 gp", weight: "6 lb.", description: "Fine clothes are made of ornate fabrics and are detailed with embroidery or other decorative elements. They are suitable for formal occasions and for making a good impression in social settings.", type: "Adventuring Gear" },
  { name: "Traveler's Clothes", cost: "2 gp", weight: "4 lb.", description: "Traveler's clothes are made of sturdy fabric designed for travel in a variety of climates.", type: "Adventuring Gear" },
  { name: "Sack", cost: "1 cp", weight: "0.5 lb.", description: "A sack can hold 30 pounds of gear within its 1-cubic-foot interior. It can also be worn as a backpack.", type: "Adventuring Gear" },
  { name: "Sleeping Bag", cost: "1 gp", weight: "7 lb.", description: "While using a sleeping bag, a creature benefits from insulation against cold weather.", type: "Adventuring Gear", effect: "While using a sleeping bag, a creature benefits from insulation against cold weather." },
  { name: "Holy Symbol (Amulet)", cost: "5 gp", weight: "0.5 lb.", description: "A holy symbol is a representation of a god or pantheon. It might be an amulet, a badge, a shield emblem, or a reliquary. A cleric or paladin can use a holy symbol as a spellcasting focus.", type: "Adventuring Gear" },
  { name: "Holy Symbol (Emblem)", cost: "5 gp", weight: "1 lb.", description: "A holy symbol is a representation of a god or pantheon. It might be an amulet, a badge, a shield emblem, or a reliquary. A cleric or paladin can use a holy symbol as a spellcasting focus.", type: "Adventuring Gear" },
  { name: "Holy Symbol (Reliquary)", cost: "5 gp", weight: "2 lb.", description: "A holy symbol is a representation of a god or pantheon. It might be an amulet, a badge, a shield emblem, or a reliquary. A cleric or paladin can use a holy symbol as a spellcasting focus.", type: "Adventuring Gear" },
  { name: "Bell", cost: "1 gp", weight: "-", description: "When you shake it, it produces a sound audible at a distance of 60 feet.", type: "Adventuring Gear" },
  { name: "Tent", cost: "2 gp", weight: "20 lb.", description: "A simple tent large enough for two creatures.", type: "Adventuring Gear" },
  { name: "Ink (1 ounce bottle)", cost: "10 gp", weight: "-", description: "Comes in a 1-ounce bottle and is enough to write roughly 500 pages of text.", type: "Adventuring Gear" },
  { name: "Torch", cost: "1 cp", weight: "1 lb.", description: "For 1 hour, a torch emits bright light in a 6-meter radius and dim light for an additional 6 meters. If you use a torch in combat, you can attack with it as a Simple Weapon, dealing 1 fire damage on a hit.", type: "Equipment", effect: "If you use a torch in combat, you can attack with it as a Simple Weapon, dealing 1 fire damage on a hit." },
  { name: "Tunic", cost: "1 gp", weight: "-", description: "A tunic is a simple garment worn for everyday purposes.", type: "Adventuring Gear" },
  { name: "Candle", cost: "1 cp", weight: "-", description: "For 1 hour, a candle emits bright light in a 1.5-meter radius and dim light for an additional 1.5 meters.", type: "Adventuring Gear" },
  { name: "Basic Poison (vial)", cost: "100 gp", weight: "-", description: "You can use a bonus action to apply a dose of basic poison to one weapon or up to three pieces of ammunition. A creature that takes piercing or slashing damage from the poisoned weapon or ammunition takes an extra 1d4 poison damage. Once applied, the poison retains potency for 1 minute or until it deals its damage, whichever comes first.", type: "Adventuring Gear", effect: "You can use a bonus action to apply a dose of basic poison to one weapon or up to three pieces of ammunition. A creature that takes piercing or slashing damage from the poisoned weapon or ammunition takes an extra 1d4 poison damage. Once applied, the poison retains potency for 1 minute or until it deals its damage, whichever comes first." },
  { name: "Pot", cost: "2 cp", weight: "2 lb.", description: "A metal pot that holds 2 quarts.", type: "Adventuring Gear" },
  { name: "Iron Pot", cost: "2 gp", weight: "10 lb.", description: "An iron pot that holds 4 quarts.", type: "Adventuring Gear" },
  { name: "Rations (1 day)", cost: "5 sp", weight: "2 lb.", description: "Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, and nuts.", type: "Adventuring Gear" },
  { name: "Block and Tackle", cost: "1 gp", weight: "5 lb.", description: "A set of ropes with pulleys, with or without a hook, that allows one character to lift up to four times the weight he or she could normally lift.", type: "Adventuring Gear" },
  { name: "Artisan's Kit", cost: "40 gp", weight: "-", description: "An artisan's kit contains the following items: Case, Cantle, Mirror, Flask, Lamp, Small Knife, Soap, Sack, Sleeping Pad.", type: "Adventuring Gear" },
  { name: "Burglar's Kit", cost: "16 gp", weight: "-", description: "A burglar's kit contains the following items: Case, Cantle, 50 feet of rope, Metal Files, Mirror, Oil, Crowbar, 5 candles, and Sack.", type: "Adventuring Gear" },
  { name: "Adventure Kit", cost: "10 gp", weight: "-", description: "An adventure kit contains the following items: Bedroll, Mess Kit, Tinderbox, Lamp, 2 flasks of oil, 50 feet of rope, Sack, Sleeping Pad, 10 torches.", type: "Adventuring Gear" },
  { name: "Diplomat's Kit", cost: "39 gp", weight: "-", description: "A diplomat's kit contains the following items: Case, Ink, Lamp, 5 sheets of paper, flask of perfume, wax, fine clothes, ink pen.", type: "Adventuring Gear" },
  { name: "Scholar's Kit", cost: "40 gp", weight: "-", description: "A scholar's kit contains the following items: Case, Ink, Lamp, Ruler, Book, 10 sheets of paper, small bag of sand, ink pen.", type: "Adventuring Gear" },
  { name: "Climber's Kit", cost: "25 gp", weight: "-", description: "A climber's kit contains special pitons, a hammer, 10 stirrups, and 50 feet of rope. If you use a Climber's Kit, you have advantage on Strength (Athletics) checks made to climb difficult surfaces.", type: "Adventuring Gear", effect: "If you use a Climber's Kit, you have advantage on Strength (Athletics) checks made to climb difficult surfaces." },
  { name: "Dungeon Explorer's Kit", cost: "12 gp", weight: "-", description: "A Dungeon Explorer's Kit contains: Backpack, Crowbar, Hammer, 10 pitons, 10 torches, Tinderbox, Waterskin, 50 feet of rope, Mess Kit.", type: "Adventuring Gear" },
  { name: "Priest's Kit", cost: "33 gp", weight: "-", description: "A Priest's Kit contains: Holy water, Tinderbox, Censer, Vestments, Flask, Lamp, 2 blocks of Incense, 5 candles, Tunic.", type: "Adventuring Gear" },
  { name: "Mule", cost: "2 gp", weight: "-", description: "Each mule can carry up to 420 pounds of gear.", type: "Adventuring Gear" },
  { name: "Arrows", cost: "1 gp", weight: "1 lb.", description: "Ammunition for bows.", type: "Ammunition"},
  { name: "Bolts", cost: "1 gp", weight: "1 1/2 lb.", description: "Ammunition for crossbows.", type: "Ammunition"},
  { name: "Bullets, Firearm", cost: "3 gp", weight: "2 lb.", description: "Ammunition for firearms.", type: "Ammunition"},
  { name: "Bullets, Sling", cost: "4 gp", weight: "1 1/2 lb.", description: "Ammunition for slings.", type: "Ammunition"},
  { name: "Needles", cost: "1 gp", weight: "1 lb.", description: "Ammunition for blowguns.", type: "Ammunition"},
] as AdventureGearItem[];

export const ammunition: AmmunitionBasic[] = [
  { name: "Arrows", cost: "1 gp", weight: "1 lb.", description: "Ammunition for bows.", amount: 20, storage: "Quiver" },
  { name: "Bolts", cost: "1 gp", weight: "1 1/2 lb.", description: "Ammunition for crossbows.", amount: 20, storage: "Case" },
  { name: "Bullets, Firearm", cost: "3 gp", weight: "2 lb.", description: "Ammunition for firearms.", amount: 10, storage: "Pouch" },
  { name: "Bullets, Sling", cost: "4 cp", weight: "1 1/2 lb.", description: "Ammunition for slings.", amount: 20, storage: "Pouch" },
  { name: "Needles", cost: "1 gp", weight: "1 lb.", description: "Ammunition for blowguns.", amount: 50, storage: "Pouch" },
];