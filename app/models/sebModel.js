import mongoose from "mongoose";

const sebSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
  },
  grade: {
    type: [Number],
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  assessment: {
    type: String,
    require: true,
  },
  teacher: {
    type: String,
    require: true,
  },
});

const sebModel = mongoose.model("seb", sebSchema);

export default sebModel;
