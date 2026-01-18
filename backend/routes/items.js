import express from "express";
import pool from "../db.js";

const router = express.Router();

/**
 * GET /items
 * Hämtar alla items från databasen
 */
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT
        id,
        name,
        description,
        type,
        rarity,
        level_requirement,
        slot,
        stackable,
        max_stack,
        usable,
        effect,
        icon,
        price
      FROM items
      ORDER BY id
      `,
    );

    res.json(result.rows);
  } catch (err) {
    // VIKTIG logg för felsökning
    console.error("POSTGRES ERROR in /items:", err.message);
    console.error(err);

    res.status(500).json({
      error: "Failed to fetch items",
      details: err.message,
    });
  }
});

export default router;
