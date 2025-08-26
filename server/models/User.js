const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    noHp: {
      type: String,
      unique: true,
    },
    alamat: {
      type: String,
    },
    namaToko: {
      type: String,
    },
    jamOperasional: {
      type: String,
    },
    isMitra: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
