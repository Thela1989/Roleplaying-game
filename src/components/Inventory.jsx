import { useEffect, useState } from "react";

function Inventory({ characterId }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!characterId) return;

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

  if (loading) return <p>Laddar inventory...</p>;

  return (
    <section>
      <h2>Inventory</h2>

      {items.length === 0 && <p>Inventory är tomt</p>}

      <ul>
        {items.map((item) => (
          <li key={item.name}>
            {item.name} × {item.quantity}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Inventory;
