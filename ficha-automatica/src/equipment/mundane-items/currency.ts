interface Currency {
    name: string;
    value: number;
  }
  
  export const currency: Currency[] = [
    { name: "Copper (cp)", value: 0.01 },
    { name: "Silver (sp)", value: 0.1 },
    { name: "Electrum (ep)", value: 0.5 },
    { name: "Gold (gp)", value: 1 },
    { name: "Platinum (pp)", value: 10 },
  ];