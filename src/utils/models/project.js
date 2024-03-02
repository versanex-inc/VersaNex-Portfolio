import mongoose from "mongoose";

const projectModel = new mongoose.Schema({
  title: {
    type: String,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  images: [
    {
      url: String,
      // Optionally you can add other image properties here
    },
  ],
  creator: {
    type: String,
  },
  creatorProfile: {
    type: String,
  },
  category: {
    type: String,
    enum: ["gfx", "programming"],
  },
  subCategory: {
    type: String,
    enum: ["illustration", "gfx", "3d", "eshop", "bzness", "portfolio"],
  },
  status: {
    type: String,
    enum: ["in progress", "completed", "on hold", "cancelled"],
  },
  deadline: {
    type: Date, // Assuming deadline is a date
  },
});

export const Project =
  mongoose.models.project || mongoose.model("project", projectModel);
