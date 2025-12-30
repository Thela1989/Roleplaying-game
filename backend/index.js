import express from "express";
import cors from "cors";
import pkg from "pg";
import "dotenv/config";

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

/* TEST */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* HÄMTA KARAKTÄR */
app.get("/characters/:id", async (req, res) => {
  const { id } = req.params;

  const result = await pool.query("SELECT * FROM characters WHERE id = $1", [
    id,
  ]);

  res.json(result.rows[0]);
});

/* HÄMTA INVENTORY */
app.get("/inventory/:characterId", async (req, res) => {
  const { characterId } = req.params;

  const result = await pool.query(
    `
    SELECT i.name, i.type, inv.quantity
    FROM inventory inv
    JOIN items i ON inv.item_id = i.id
    WHERE inv.character_id = $1
  `,
    [characterId]
  );

  res.json(result.rows);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
