import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: null,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  whatsapp: {
    type: Number,
    required: true,
    unique: true,
  },
  gender: {
    type: Boolean,
    required: true,
  },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;