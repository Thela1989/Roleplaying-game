import { useNavigate } from "react-router-dom";
import "../styles/StartPage.css";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="start-page">
      <div className="overlay">
        <h1>Beasts unleashed</h1>
        <h2>The Guardian's Quest</h2>

        <button onClick={() => navigate("/start-details")}>Start Game</button>
      </div>
    </div>
  );
}
