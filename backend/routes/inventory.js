// backend/routes/inventory.js
import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/:characterId", async (req, res) => {
  const { characterId } = req.params;

  const result = await pool.query(
    `
    SELECT 
      i.id,
      i.name,
      i.type,
      i.slot,
      inv.quantity,
      inv.equipped,
      i.icon
    FROM inventory inv
    JOIN items i ON inv.item_id = i.id
    WHERE inv.character_id = $1
    `,
    [characterId],
  );

  res.json(result.rows);
});

export default router;
