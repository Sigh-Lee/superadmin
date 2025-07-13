
const express = require("express");
const router = express.Router();
const License = require("../models/License");
const User = require("../models/User");

// Get all mentors
router.get("/mentors", async (req, res) => {
  const mentors = await User.find({ role: "mentor" });
  res.json(mentors);
});

// Approve mentor
router.put("/approve/:id", async (req, res) => {
  const mentor = await User.findById(req.params.id);
  if (mentor) {
    mentor.approved = true;
    await mentor.save();
    res.send("Mentor approved");
  } else {
    res.status(404).send("Mentor not found");
  }
});

// Delete mentor
router.delete("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("Mentor deleted");
});

module.exports = router;
