import { connectionStr } from "@/utils/db";
import { Anonymous } from "@/utils/models/anonymous";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(connectionStr);
    const data = await Anonymous.find();
    // console.log("Fetched products:", data);
    return NextResponse.json({ result: data, success: true });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}
