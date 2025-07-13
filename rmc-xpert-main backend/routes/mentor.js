
const express = require("express");
const router = express.Router();
const MentorSymbols = require("../models/MentorSymbols");

// Add symbols for mentor
router.post("/symbols", async (req, res) => {
  const { mentorId, symbols } = req.body;
  const existing = await MentorSymbols.findOne({ mentorId });
  if (existing) {
    existing.symbols = symbols;
    await existing.save();
  } else {
    await MentorSymbols.create({ mentorId, symbols });
  }
  res.send("Symbols updated");
});

// Get mentor's symbols
router.get("/symbols/:mentorId", async (req, res) => {
  const symbols = await MentorSymbols.findOne({ mentorId: req.params.mentorId });
  res.json(symbols || { symbols: [] });
});

module.exports = router;
