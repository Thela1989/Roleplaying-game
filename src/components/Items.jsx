import { useEffect, useState } from "react";
import "../styles/items.css";

function Items({ characterId }) {
  const [items, setItems] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  return (
    <section className="items-frame">
      <h2 className="items-title">Items</h2>

      {/* GRID – ENDA rendering av items */}
      <div className="items-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className={`item-slot rarity-${item.rarity || "common"}`}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img
              src={`/icons/${item.icon || "default.png"}`}
              alt={item.name}
              className="item-icon"
            />
          </div>
        ))}
      </div>

      {/* TOOLTIP */}
      {hoveredItem && (
        <div className="item-tooltip">
          <h3 className={`tooltip-title ${hoveredItem.rarity}`}>
            {hoveredItem.name}
          </h3>

          <p className="tooltip-type">
            {hoveredItem.type} · {hoveredItem.rarity}
          </p>

          {hoveredItem.effect?.damage && (
            <p>Damage: {hoveredItem.effect.damage}</p>
          )}

          <p className="tooltip-description">{hoveredItem.description}</p>
        </div>
      )}
    </section>
  );
}

export default Items;
