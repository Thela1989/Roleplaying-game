import { useState } from "react";

export const useStats = (initialStats) => {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(initialStats.level);
  const [health, setHealth] = useState(initialStats.health ?? 100);
  const [gold, setGold] = useState(initialStats.gold);

  const addXp = (amount) => {
    setXp((prev) => prev + amount);
  };

  const takeDamage = (amount) => {
    setHealth((prev) => Math.max(prev - amount, 0));
  };

  const heal = (amount) => {
    setHealth((prev) => prev + amount);
  };

  const spendGold = (amount) => {
    if (gold >= amount) {
      setGold((prev) => prev - amount);
    } else {
      console.warn("Not enough gold!");
    }
  };

  const earnGold = (amount) => {
    setGold((prev) => prev + amount);
  };

  return {
    xp,
    level,
    health,
    gold,
    addXp,
    takeDamage,
    heal,
    spendGold,
    earnGold,
    setLevel,
  };
};
