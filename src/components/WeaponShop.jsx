// components/WeaponShop.jsx
export default function WeaponShop({ playerXP, gold, onBuy }) {
  const weapons = [
    { id: 1, name: "Kniv", damage: 2, cost: 10, requiredXP: 0 },
    { id: 2, name: "Svärd", damage: 5, cost: 25, requiredXP: 20 },
    { id: 3, name: "Yxa", damage: 8, cost: 40, requiredXP: 50 },
  ];

  const available = weapons.filter(w => playerXP >= w.requiredXP);

  return (
    <div
      style={{
        backgroundColor: "#fffbe6",
        padding: "1rem",
        borderRadius: "12px",
      }}
    >
      <h2>Vapenbutik</h2>
      {available.map(w => (
        <div key={w.id} style={{ marginBottom: "1rem" }}>
          <strong>{w.name}</strong> – Skada: {w.damage} – Pris: {w.cost} guld
          <button
            onClick={() => onBuy(w)}
            disabled={gold < w.cost}
            style={{ marginLeft: "1rem" }}
          >
            {gold >= w.cost ? "Köp" : "För dyrt"}
          </button>
        </div>
      ))}
      <button onClick={() => setIsBuyingWeapon(false)}>Tillbaka</button>
    </div>
  );
}
