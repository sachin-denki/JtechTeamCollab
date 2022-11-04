const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  password: { type: String, required: true },
  profileImage: { type: String },
  bio: { type: String},
  location: { type: String},
  blockStatus: { type: Number, default:0 },
  weeklyUpdates: { type: Number, default:0},
  yourStrories: { type: Number, default:0},
  featureUpdates: { type: Number, default:0}
});

module.exports = mongoose.model("users", usersSchema);         