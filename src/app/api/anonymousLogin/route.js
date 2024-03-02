import { Anonymous } from "@/utils/models/anonymous";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/utils/db";

export async function POST(request) {
  try {
    const { anonymousKey } = await request.json();

    await mongoose.connect(connectionStr);

    const existingKey = await Anonymous.findOne({ anonymousKey });

    if (!existingKey) {
      console.log("Key not found");
      return NextResponse.json({ success: false, message: "Key not found" });
    }

    console.log("Login successful");
    return NextResponse.json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ error, success: false });
  }
}