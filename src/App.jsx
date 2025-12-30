import React, { useState, useEffect, useRef } from "react";
import StartPage from "./components/StartPage";
import WeaponShop from "./components/WeaponShop";
import { useGame } from "./hooks/useGame";
import { useStats } from "./hooks/useStats";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [isBuyingWeapon, setIsBuyingWeapon] = useState(false);

  const { currentLocation, goTown, goStore, goCave, fightDragon } = useGame();
  const { xp, level, health, gold, heal, spendGold, earnGold, addXp } =
    useStats();

  const audioRef = useRef(null);

  // Ljudhantering: Byt musik när platsen ändras
  useEffect(() => {
    if (currentLocation && currentLocation.sound) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }

      const newAudio = new Audio(currentLocation.sound);
      newAudio.loop = false;
      newAudio.volume = 0.4;

      newAudio.play().catch(error => {
        console.log("Audio play fail:", error);
      });

      audioRef.current = newAudio;
    }
  }, [currentLocation]);

  // När man klickar på "Start Game" (från StartPage)
  const startGame = () => {
    setGameStarted(true);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const newAudio = new Audio("/sounds/town.mp3"); // Startar med town-musiken
    newAudio.loop = true;
    newAudio.volume = 0;

    newAudio.play().catch(error => {
      console.log("Audio start fail:", error);
    });

    audioRef.current = newAudio;
  };

  // Hanterar alla knapptryckningar i spelet
  const handleAction = index => {
    const action = currentLocation.buttonFunctions[index];
    switch (action) {
      case "goStore":
        goStore();
        break;
      case "goBoard":
        goBoard();
        break;
      case "goAlley":
        goBoard();
        break;
      case "goCave":
        goCave();
        break;
      case "fightDragon":
        fightDragon();
        break;
      case "goTown":
        goTown();
        break;
      case "buyHealth":
        buyHealth();
        break;
      case "buyWeapon":
        buyWeapon();
        break;
      default:
        console.warn("Unknown action: ", action);
    }
  };

  // Köp health
  const buyHealth = () => {
    if (gold >= 10) {
      spendGold(10);
      heal(10);
    } else {
      alert("Not enough gold!");
    }
  };

  // Öppna vapenshop
  const buyWeapon = () => {
    setIsBuyingWeapon(true);
  };

  // Hantera när vapen köps
  const handleBuyWeapon = weapon => {
    if (gold >= weapon.cost) {
      spendGold(weapon.cost);
      setInventory([...inventory, weapon]);
      setIsBuyingWeapon(false);
    } else {
      alert("Not enough gold!");
    }
  };

  // Rendera StartPage först om spelet inte har börjat
  if (!gameStarted) {
    return <StartPage onStart={startGame} />;
  }

  // När spelet har börjat, rendera spelet
  return (
    <div>
      {/* Titel */}
      <div className="header">
        <h1>Beasts Unleashed:</h1>
        <h2>The Guardian's Quest</h2>
      </div>

      <div id="game-container">
        <div id="game">
          {/* Om man är i vapenshop */}
          {isBuyingWeapon && (
            <WeaponShop playerXP={xp} gold={gold} onBuy={handleBuyWeapon} />
          )}

          {/* Stats */}
          <div id="stats">
            <span className="stat">
              XP: <strong>{xp}</strong>
            </span>
            <span className="stat">
              Level: <strong>{level}</strong>
            </span>
            <span className="stat">
              Health: <strong>{health}</strong>
            </span>
            <span className="stat">
              Gold: <strong>{gold}</strong>
            </span>
          </div>

          {/* Inventory */}
          <div id="inventory">
            <img
              src="/images/chest.png"
              alt="Open Inventory"
              id="chestinventory"
            />

            <h3>Ditt Inventory</h3>
            {inventory.length === 0 ? (
              <p>Du har inga vapen ännu.</p>
            ) : (
              <ul>
                {inventory.map((item, index) => (
                  <li key={index}>
                    {item.name} (Skada: {item.damage})
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Knappar och ikoner */}
          <div id="controls">
            <img src={currentLocation.icon[0]} alt="icon1" />
            <button onClick={() => handleAction(0)}>
              {currentLocation.buttonText[0]}
            </button>

            <img src={currentLocation.icon[1]} alt="icon2" />
            <button onClick={() => handleAction(1)}>
              {currentLocation.buttonText[1]}
            </button>
            <img src={currentLocation.icon[2]} alt="icon3" />
            <button onClick={() => handleAction(2)}>
              {currentLocation.buttonText[2]}
            </button>
            <img src={currentLocation.icon[3]} alt="icon3" />
            <button onClick={() => handleAction(3)}>
              {currentLocation.buttonText[3]}
            </button>

            <img src={currentLocation.icon[4]} alt="icon4" />
            <button onClick={() => handleAction(4)}>
              {currentLocation.buttonText[4]}
            </button>
          </div>

          {/* Bild med text */}
          <div id="image-with-text">
            <img
              id="image"
              src={currentLocation.image || "/images/paper.jpg"}
              alt="location"
            />
            <div id="text-overlay" className="text-overlay">
              {currentLocation.text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
