import express from "express";
const router = express.Router();

import { getAllCats, getCatByID, getCatByName } from "../models/cats.js";

router.get("/", async (req, res) => {
  const name = req.query.name;

  if (name) {
    const result = await getCatByName(name);
    res.json({
      success: "true",
      message: "The cat/s you requested:",
      data: result,
    });
    return;
  }
  const cats = await getAllCats();
  res.json({
    success: "true",
    message: "The cat/s you requested:",
    data: cats,
  });
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const result = await getCatByID(id);
  res.json({
    success: "true",
    message: `Cat with id:${id}`,
    data: result,
  });
});

export default router;
