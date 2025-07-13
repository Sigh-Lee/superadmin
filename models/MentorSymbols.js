
const mongoose = require("mongoose");
const MentorSymbolSchema = new mongoose.Schema({
  mentorId: String,
  symbols: [String]
});
module.exports = mongoose.model("MentorSymbols", MentorSymbolSchema);
