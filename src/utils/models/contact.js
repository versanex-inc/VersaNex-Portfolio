import mongoose from "mongoose";

const contactModel = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});

export const Contact =
  mongoose.models.contact || mongoose.model("contact", contactModel);
