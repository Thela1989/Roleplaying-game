import { useLocation, Link } from "react-router-dom";
import "../styles/profile.css";

export default function Profile() {
  const location = useLocation();
  const { name, image, className, maxHp, currentHp } = location.state || {};

  const pct = maxHp ? Math.max(0, Math.min(100, (currentHp / maxHp) * 100)) : 0;
  let barGradient = "linear-gradient(90deg,#2ecc71,#27ae60)"; // green
  if (pct <= 25) barGradient = "linear-gradient(90deg,#e74c3c,#c0392b)"; // red
  else if (pct <= 50) barGradient = "linear-gradient(90deg,#f1c40f,#f39c12)"; // yellow
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {!name || !image ? (
        <div>
          <p>Inga profiluppgifter hittades.</p>
          <Link to="/">Gå tillbaka och skapa karaktär</Link>
        </div>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Class:</strong> {className}
          </p>

          <div style={{ marginTop: 8, maxWidth: 280 }}>
            <div>
              <strong style={{ display: "flex", justifyContent: "center" }}>
                Health:
              </strong>{" "}
            </div>
            <div
              style={{
                width: "100%",
                height: 18,
                background: "#333",
                borderRadius: 8,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${pct}%`,
                  height: "100%",
                  background: barGradient,
                  borderRadius: 8,
                  transition: "width 300ms ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 700,
                  pointerEvents: "none",
                }}
              >
                {Math.round(pct)}%
              </div>
            </div>

            <div style={{ marginTop: 12 }}>
              <img
                src={image}
                alt={`${name} profile`}
                style={{ width: 200, height: 200, borderRadius: 12 }}
              />
            </div>
          </div>
          <div style={{ marginTop: 16 }}>
            <Link to="/">Tillbaka</Link>
          </div>
        </div>
      )}
    </div>
  );
}
