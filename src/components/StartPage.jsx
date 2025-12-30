// StartPage.jsx

import React from "react";
import "../styles/StartPage.css";

const StartPage = ({ onStart }) => {
  const handleStart = () => {
    if (onStart) {
      onStart(); // När du klickar på knappen, anropas startGame() i App.jsx
    }
  };

  return (
    <div className="start-page">
      <h1>Beast Unleashed</h1>
      <h2>The Guardian's Quest</h2>

      <img
        src="/images/letter.png"
        alt="letter-image"
        className="intro-image"
      />

      <button onClick={handleStart}>Start Game</button>
    </div>
  );
};

export default StartPage;
