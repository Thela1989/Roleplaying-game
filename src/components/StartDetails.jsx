import "../styles/startDetails.css";

export default function StartDetails({ onBack }) {
  return (
    <div className="start-details-container">
      <div
        className="start-details"
        style={{ textAlign: "center", paddingTop: "120px" }}
      >
        <button onClick={onBack} style={{ marginTop: "1rem" }}>
          Tillbaka till startmenyn
        </button>
      </div>
    </div>
  );
}
