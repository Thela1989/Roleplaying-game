import { useEffect, useState } from "react";

function MonsterPage() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/monsters")
      .then((res) => res.json())
      .then((data) => setMonsters(data.results));
  }, []);

  return (
    <div className="monster-page">
      {monsters.map((monster) => (
        <div key={monster.index} className="monster-card">
          <h3>{monster.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default MonsterPage;
