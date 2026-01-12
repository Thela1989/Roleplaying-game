import "../styles/StartPage.css";

export default function StartPage() {
  return (
    <div className="start-page">
      <div className="overlay">
        <h1>Beasts unleashed</h1>
        <button onClick={() => (window.location.href = "/start-details")}>
          Start Game
        </button>
      </div>
    </div>
  );
}
