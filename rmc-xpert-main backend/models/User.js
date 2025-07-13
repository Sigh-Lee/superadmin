
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String // 'mentor' or 'client'
});
module.exports = mongoose.model("User", UserSchema);
