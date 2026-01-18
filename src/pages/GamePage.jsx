import { useEffect, useState } from "react";

function GamePage() {
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/characters/1")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch character");
        return res.json();
      })
      .then((data) => setCharacter(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  if (!character) {
    return <p>Laddar karaktär...</p>;
  }

  return (
    <div>
      <h1>{character.name}</h1>

      <p>Level: {character.level}</p>
      <p>Gold: {character.gold}</p>

      <Inventory characterId={character.id} />

      <div style={{ color: "green", marginTop: "20px" }}>
        GamePage renderar korrekt ✔
      </div>
    </div>
  );
}

export default GamePage;
