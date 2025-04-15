import { weapons } from './weapons';
import masteryProperties from './mastery/weaponsmastery';
import { weaponProperties } from './properties/weaponsproperties';
import { ammunition } from '../adventure-gear'; // mesma fonte que adventureGear

// Interfaces
interface MasteryProperty {
  name: string;
  description: string;
}

interface WeaponProperty {
  name: string;
  description: string;
}

interface AmmunitionBasic {
  name: string;
  amount: number;
  storage: string;
  weight: string;
  cost: string;
  description: string;
}

interface Weapon {
  category: string;
  name: string;
  damage: string;
  damageType: string;
  properties: string[] | MasteryProperty[];
  mastery: string | MasteryProperty;
  weight: string;
  cost: string;
  ammunition?: string; // pode sobrepor o inferido
}

// 🧠 Lista de palavras-chave conhecidas para munição
const ammoKeywords = [
  "arrow", "arrows",
  "bolt", "bolts",
  "bullet", "bullets",
  "needle", "needles",
  "sling"
];

// 🔍 Função pra detectar tipo de munição com base nas propriedades
function inferAmmunitionType(properties: string[]): string | null {
  const normalizedProps = properties.map(p => p.toLowerCase());

  if (!normalizedProps.some(p => p.includes("ammunition"))) return null;

  for (const keyword of ammoKeywords) {
    if (normalizedProps.some(p => p.includes(keyword))) {
      return keyword;
    }
  }

  return null;
}

// 📦 Função para buscar munição no array
function findAmmunition(keyword: string): AmmunitionBasic | undefined {
  const normalized = keyword.toLowerCase();
  return ammunition.find(a => a.name.toLowerCase().includes(normalized));
}

// 🔧 Função principal
export function getWeapon(name: string): (Weapon & {
  mastery: MasteryProperty;
  properties: WeaponProperty[];
  ammunitionData?: AmmunitionBasic;
}) | null {
  const weapon = weapons.find(w => w.name === name);
  if (!weapon) return null;

  const masteryKey = weapon.mastery as string;
  const masteryData = masteryProperties[masteryKey];

  const rawProps = weapon.properties as string[];
  const propertiesData: WeaponProperty[] = rawProps.map(propName => {
    return weaponProperties[propName] || { name: propName, description: 'No description available.' };
  });

  // 🧠 Tenta detectar a munição manualmente, senão por inferência
  const ammoKeyword = weapon.ammunition?.toLowerCase() || inferAmmunitionType(rawProps);
  const ammoData = ammoKeyword ? findAmmunition(ammoKeyword) : undefined;

  return {
    ...weapon,
    mastery: masteryData || weapon.mastery,
    properties: propertiesData,
    ammunitionData: ammoData
  };
}
