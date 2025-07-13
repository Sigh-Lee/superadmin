
const express = require("express");
const router = express.Router();
const License = require("../models/License");

// Validate license key
router.post("/validate", async (req, res) => {
  const { key } = req.body;
  const license = await License.findOne({ key, isActive: true });
  if (license) {
    res.json({ valid: true, mentorId: license.mentorId });
  } else {
    res.json({ valid: false });
  }
});

// Choose symbols
router.post("/symbols", async (req, res) => {
  const { clientId, symbols } = req.body;
  // Save to database if needed
  res.send("Client symbols saved");
});

module.exports = router;
