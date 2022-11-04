const mongoose = require("mongoose");

const userAuthSchema = mongoose.Schema({
  userId: { type: Number, required: true },
  token: { type: String, required: true },
  otp: { type: String, required: true },
});

module.exports = mongoose.model("userAuth", userAuthSchema);         