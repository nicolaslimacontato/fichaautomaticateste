export const calculateBonusProficiency = (level: number): number => {
  return Math.floor((level + 7) / 4);
 };