
const mongoose = require("mongoose");
const LicenseSchema = new mongoose.Schema({
  key: String,
  mentorId: String,
  isActive: Boolean,
  clientId: String
});
module.exports = mongoose.model("License", LicenseSchema);
