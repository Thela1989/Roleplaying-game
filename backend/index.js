import express from "express";
import cors from "cors";
import itemsRouter from "./routes/items.js";

import charactersRouter from "./routes/characters.js";
import inventoryRouter from "./routes/inventory.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/characters", charactersRouter);
app.use("/inventory", inventoryRouter);
app.use("/items", itemsRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
