export const calculatemaxHitPoints = (constitution: number, level: number, givenHit: number): number => {
  const constitutionModifier = Math.floor((constitution - 10) / 2);
  return givenHit + (constitutionModifier * level);
};