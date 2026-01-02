import { useEffect, useState } from "react";
import "../styles/inventory.css";

function Inventory({ characterId }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const SLOT_COUNT = 40;

  useEffect(() => {
    if (!characterId) {
      setItems([]);
      return;
    }

    setLoading(true);

    fetch(`http://localhost:3000/inventory/${characterId}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load inventory", err);
        setLoading(false);
      });
  }, [characterId]);

  return (
    <section className="inventory-frame">
      <h2 className="inventory-title">Inventory</h2>
      {loading && <p className="inventory-empty">Laddar inventory...</p>}
      {!loading && items.length === 0 && (
        <p className="inventory-empty">Inventory är tomt</p>
      )}

      <div className="inventory-grid">
        {Array.from({ length: SLOT_COUNT }).map((_, index) => {
          const item = items[index];

          return (
            <div className="inventory-slot" key={index}>
              {item && (
                <>
                  <span className="inventory-item-name">{item.name}</span>
                  <span className="inventory-item-quantity">
                    ×{item.quantity}
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Inventory;
