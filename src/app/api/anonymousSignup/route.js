import { connectionStr } from "@/utils/db";
import { Anonymous } from "@/utils/models/anonymous";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { anonymousKey } = await request.json();

    await mongoose.connect(connectionStr);

    // Check if the key exists with the provided anonymousKey
    const existingKey = await Anonymous.findOne({ anonymousKey });

    // If key with the provided anonymousKey already exists, return error
    if (existingKey) {
      return NextResponse.json({
        error: "Key already exists",
        success: false,
      });
    }

    // Save the new key to the database
    const newKey = new Anonymous({ anonymousKey });
    await newKey.save();

    // Return success status
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error during signup:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}