import { connectionStr } from "@/utils/db";
import { Contact } from "@/utils/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    console.log("Received Payload:", payload);

    await mongoose.connect(connectionStr);

    let contact = new Contact(payload);

    // Save the message to the database
    const result = await contact.save();
    console.log("Message saved successfully:", result);

    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}
