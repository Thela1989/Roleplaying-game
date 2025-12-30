import { useEffect, useState } from "react";
import { useStats } from "../hooks/useStats";
import Inventory from "./components/inventory/Inventory";

<Inventory characterId={character.id} />;

function GamePage() {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/characters/1")
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, []);

  if (!character) return <p>Laddar karaktär...</p>;

  const stats = useStats({
    level: character.level,
    gold: character.gold,
    health: character.vitality * 10, // exempel
  });

  return (
    <div>
      <h2>{character.name}</h2>
      <p>Level: {stats.level}</p>
      <p>HP: {stats.health}</p>
      <p>Gold: {stats.gold}</p>
    </div>
  );
}

export default GamePage;
