const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  address: String,
  phoneNumber: String,
  lng: Number,
  lat: Number,
});

const UserModel = mongoose.model("pinned", UserSchema);
module.exports = UserModel;
