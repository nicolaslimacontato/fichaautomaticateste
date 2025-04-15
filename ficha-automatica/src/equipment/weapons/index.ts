// Define interfaces
interface MasteryProperty {
  name: string;
  description: string;
}

interface WeaponProperty {
  name: string;
  description: string;
}

// Define Weapon interface
interface Weapon {
  category: string;
  name: string;
  damage: string;
  damageType: string;
  properties: string[] | MasteryProperty[];
  mastery: string | MasteryProperty; // Alterado aqui para permitir string ou MasteryProperty
  weight: string;
  cost: string;
}

// Import weapons and mastery data
import { weapons } from './weapons';
import masteryProperties from './mastery/weaponsmastery';
import { weaponProperties } from './properties/weaponsproperties';

export function getWeapon(name: string): (Weapon & {
  mastery: MasteryProperty;
  properties: WeaponProperty[];
}) | null {
  const weapon = weapons.find(w => w.name === name);
  if (!weapon) return null;

  const masteryKey = weapon.mastery as string;
  const masteryData = masteryProperties[masteryKey];

  // Mapear as propriedades da arma para os objetos completos
  const propertiesData: WeaponProperty[] = (weapon.properties || []).map(propName => {
    return weaponProperties[propName] || { name: propName, description: 'No description available.' };
  });

  return {
    ...weapon,
    mastery: masteryData || weapon.mastery,
    properties: propertiesData
  };
}

