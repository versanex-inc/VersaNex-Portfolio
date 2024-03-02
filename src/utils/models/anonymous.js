import mongoose from "mongoose";

const anonymousModel = new mongoose.Schema({
  anonymousKey: {
    type: String,
    required: true,
    unique: true,
  }
});

export const Anonymous = mongoose.models.anonnymous || mongoose.model("anonnymous", anonymousModel);