// backend/routes/characters.js
import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const result = await pool.query("SELECT * FROM characters WHERE id = $1", [
    id,
  ]);

  res.json(result.rows[0]);
});

export default router;
