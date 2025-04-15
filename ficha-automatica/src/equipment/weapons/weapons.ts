interface Weapon {
  category: string;
  name: string;
  damage: string;
  damageType: string;
  properties: string[];
  mastery: string;
  weight: string;
  cost: string;
  ammunition?: string; // pode sobrepor o inferido
}

export const weapons: Weapon[] = [
  { category: 'Simple Melee', name: 'Club', damage: '1d4', damageType: 'Bludgeoning', properties: ['Light'], mastery: 'Slow', weight: '2 lb.', cost: '1 sp' },
  { category: 'Simple Melee', name: 'Dagger', damage: '1d4', damageType: 'Piercing', properties: ['Finesse', 'Light', 'Thrown (Range 20/60)'], mastery: 'Nick', weight: '1 lb.', cost: '2 gp' },
  { category: 'Simple Melee', name: 'Greatclub', damage: '1d8', damageType: 'Bludgeoning', properties: ['Two-Handed'], mastery: 'Push', weight: '10 lb.', cost: '2 sp' },
  { category: 'Simple Melee', name: 'Handaxe', damage: '1d6', damageType: 'Slashing', properties: ['Light', 'Thrown (Range 20/60)'], mastery: 'Vex', weight: '2 lb.', cost: '5 gp' },
  { category: 'Simple Melee', name: 'Javelin', damage: '1d6', damageType: 'Piercing', properties: ['Thrown (Range 30/120)'], mastery: 'Slow', weight: '2 lb.', cost: '5 sp' },
  { category: 'Simple Melee', name: 'Light Hammer', damage: '1d4', damageType: 'Bludgeoning', properties: ['Light', 'Thrown (Range 20/60)'], mastery: 'Nick', weight: '2 lb.', cost: '2 gp' },
  { category: 'Simple Melee', name: 'Mace', damage: '1d6', damageType: 'Bludgeoning', properties: [], mastery: 'Sap', weight: '4 lb.', cost: '5 gp' },
  { category: 'Simple Melee', name: 'Quarterstaff', damage: '1d6', damageType: 'Bludgeoning', properties: ['Versatile (1d8)'], mastery: 'Topple', weight: '4 lb.', cost: '2 sp' },
  { category: 'Simple Melee', name: 'Sickle', damage: '1d4', damageType: 'Slashing', properties: ['Light'], mastery: 'Nick', weight: '2 lb.', cost: '1 gp' },
  { category: 'Simple Melee', name: 'Spear', damage: '1d6', damageType: 'Piercing', properties: ['Thrown (Range 20/60)', 'Versatile (1d8)'], mastery: 'Sap', weight: '3 lb.', cost: '1 gp' },
  { category: 'Simple Ranged', name: 'Dart', damage: '1d4', damageType: 'Piercing', properties: ['Finesse', 'Thrown (Range 20/60)'], mastery: 'Vex', weight: '1/4 lb.', cost: '5 cp' },
  { category: 'Simple Ranged', name: 'Light Crossbow', damage: '1d8', damageType: 'Piercing', properties: ['Ammunition (Range 80/320)', 'Bolt', 'Loading', 'Two-Handed'], mastery: 'Slow', weight: '5 lb.', cost: '25 gp' },
  { category: 'Martial Melee', name: 'Battleaxe', damage: '1d8', damageType: 'Slashing', properties: ['Versatile (1d10)'], mastery: 'Topple', weight: '4 lb.', cost: '10 gp' },
  { category: 'Martial Melee', name: 'Flail', damage: '1d8', damageType: 'Bludgeoning', properties: [], mastery: 'Sap', weight: '2 lb.', cost: '10 gp' },
  { category: 'Martial Melee', name: 'Glaive', damage: '1d10', damageType: 'Slashing', properties: ['Heavy', 'Reach', 'Two-Handed'], mastery: 'Graze', weight: '6 lb.', cost: '20 gp' },
  { category: 'Martial Melee', name: 'Greataxe', damage: '1d12', damageType: 'Slashing', properties: ['Heavy', 'Two-Handed'], mastery: 'Cleave', weight: '7 lb.', cost: '30 gp' },
  { category: 'Martial Melee', name: 'Greatsword', damage: '2d6', damageType: 'Slashing', properties: ['Heavy', 'Two-Handed'], mastery: 'Graze', weight: '6 lb.', cost: '50 gp' },
  { category: 'Martial Melee', name: 'Halberd', damage: '1d10', damageType: 'Slashing', properties: ['Heavy', 'Reach', 'Two-Handed'], mastery: 'Cleave', weight: '6 lb.', cost: '20 gp' },
  { category: 'Martial Melee', name: 'Lance', damage: '1d10', damageType: 'Piercing', properties: ['Heavy', 'Reach'], mastery: 'Topple', weight: '6 lb.', cost: '10 gp' },
  { category: 'Martial Melee', name: 'Longsword', damage: '1d8', damageType: 'Slashing', properties: ['Versatile (1d10)'], mastery: 'Sap', weight: '3 lb.', cost: '15 gp' },
  { category: 'Martial Melee', name: 'Maul', damage: '2d6', damageType: 'Bludgeoning', properties: ['Heavy', 'Two-Handed'], mastery: 'Topple', weight: '10 lb.', cost: '10 gp' },
  { category: 'Martial Melee', name: 'Morningstar', damage: '1d8', damageType: 'Piercing', properties: [], mastery: 'Sap', weight: '4 lb.', cost: '15 gp' },
  { category: 'Martial Melee', name: 'Pike', damage: '1d10', damageType: 'Piercing', properties: ['Heavy', 'Reach', 'Two-Handed'], mastery: 'Push', weight: '18 lb.', cost: '5 gp' },
  { category: 'Martial Melee', name: 'Rapier', damage: '1d8', damageType: 'Piercing', properties: ['Finesse'], mastery: 'Vex', weight: '2 lb.', cost: '25 gp' },
  { category: 'Martial Melee', name: 'Scimitar', damage: '1d6', damageType: 'Slashing', properties: ['Finesse', 'Light'], mastery: 'Nick', weight: '3 lb.', cost: '25 gp' },
  { category: 'Martial Melee', name: 'Shortsword', damage: '1d6', damageType: 'Piercing', properties: ['Finesse', 'Light'], mastery: 'Vex', weight: '2 lb.', cost: '10 gp' },
  { category: 'Martial Melee', name: 'Trident', damage: '1d8', damageType: 'Piercing', properties: ['Thrown (Range 20/60)', 'Versatile (1d10)'], mastery: 'Topple', weight: '4 lb.', cost: '5 gp' },
  { category: 'Martial Melee', name: 'Warhammer', damage: '1d8', damageType: 'Bludgeoning', properties: ['Versatile (1d10)'], mastery: 'Push', weight: '5 lb.', cost: '15 gp' },
  { category: 'Martial Melee', name: 'War Pick', damage: '1d8', damageType: 'Piercing', properties: ['Versatile (1d10)'], mastery: 'Sap', weight: '2 lb.', cost: '5 gp' },
  { category: 'Martial Melee', name: 'Whip', damage: '1d4', damageType: 'Slashing', properties: ['Finesse', 'Reach'], mastery: 'Slow', weight: '3 lb.', cost: '2 gp' },
    { 
      category: 'Simple Ranged', 
      name: 'Shortbow', 
      damage: '1d6', 
      damageType: 'Piercing', 
      properties: ['Ammunition (Range 80/320)', 'Two-Handed'], 
      mastery: 'Vex', 
      weight: '2 lb.', 
      cost: '25 gp', 
      ammunition: 'Arrow'
    },
    { 
      category: 'Simple Ranged', 
      name: 'Sling', 
      damage: '1d4', 
      damageType: 'Bludgeoning', 
      properties: ['Ammunition (Range 30/120)'], 
      mastery: 'Slow', 
      weight: '', 
      cost: '1 sp', 
      ammunition: 'Bullet' 
    },
    { 
      category: 'Martial Ranged', 
      name: 'Blowgun', 
      damage: '1', 
      damageType: 'Piercing', 
      properties: ['Ammunition (Range 25/100)', 'Loading'], 
      mastery: 'Vex', 
      weight: '1 lb.', 
      cost: '10 gp', 
      ammunition: 'Needle'
    },
    { 
      category: 'Martial Ranged', 
      name: 'Hand Crossbow', 
      damage: '1d6', 
      damageType: 'Piercing', 
      properties: ['Ammunition (Range 30/120)', 'Light', 'Loading'], 
      mastery: 'Push', 
      weight: '3 lb.', 
      cost: '75 gp', 
      ammunition: 'Bolt'
    },
    { 
      category: 'Martial Ranged', 
      name: 'Heavy Crossbow', 
      damage: '1d10', 
      damageType: 'Piercing', 
      properties: ['Ammunition (Range 100/400)', 'Heavy', 'Loading', 'Two-Handed'], 
      mastery: 'Slow', 
      weight: '18 lb.', 
      cost: '50 gp', 
      ammunition: 'Bolt'
    },
    { 
      category: 'Martial Ranged', 
      name: 'Longbow', 
      damage: '1d8', 
      damageType: 'Piercing', 
      properties: ['Ammunition (Range 150/600)', 'Heavy', 'Two-Handed'], 
      mastery: 'Slow', 
      weight: '2 lb.', 
      cost: '50 gp', 
      ammunition: 'Arrow'
    },
    { 
      category: 'Martial Ranged', 
      name: 'Musket', 
      damage: '1d12', 
      damageType: 'Piercing', 
      properties: ['Ammunition (Range 40/120)', 'Loading', 'Two-Handed'], 
      mastery: 'Slow', 
      weight: '10 lb.', 
      cost: '500 gp', 
      ammunition: 'Bullet'
    },
    { 
      category: 'Martial Ranged', 
      name: 'Pistol', 
      damage: '1d10', 
      damageType: 'Piercing', 
      properties: ['Ammunition (Range 30/90)', 'Loading'], 
      mastery: 'Vex', 
      weight: '3 lb.', 
      cost: '250 gp', 
      ammunition: 'Bullet'
    }
  ];
