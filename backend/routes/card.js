const express = require("express");
const Card = require("../models/Card");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required." });
    }

    const existingCard = await Card.findOne({ title });
    if (existingCard) {
      return res
        .status(409)
        .json({ message: "A card with this title already exists." });
    }

    const card = new Card({ title, description });
    await card.save();
    res.status(201).json(card);
  } catch (error) {
    console.error("Error creating card:", error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the card." });
  }
});

router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    console.error("Error retrieving cards:", error);
    res
      .status(500)
      .json({ message: "An error occurred while retrieving the cards." });
  }
});

router.get("/:title", async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({ message: "Card not found." });
    }
    res.status(200).json(card);
  } catch (error) {
    console.error("Error retrieving card:", error);
    res
      .status(500)
      .json({ message: "An error occurred while retrieving the card." });
  }
});

router.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});

module.exports = router;
