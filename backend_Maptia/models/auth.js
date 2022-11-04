const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  userId: { type: Number, required: true },
  token: { type: Number, required: true },
});

module.exports = mongoose.model("auth", authSchema);         