import { connectionStr } from "@/utils/db";
import { Admin } from "@/utils/models/adminLogin";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
var CryptoJS = require("crypto-js");

export async function POST(request) {
  try {
    const payload = await request.json();
    // console.log("Received Payload:", payload);

    await mongoose.connect(connectionStr);
    const existingUser = await Admin.findOne({ email: payload.email });

    if (existingUser) {
      return NextResponse.json({
        error: "User with this email already exists",
        success: false,
      });
    }

    // Encrypt the password before saving it to the database
    const encryptedPassword = CryptoJS.AES.encrypt(
      payload.password,
      "your_secret_key"
    ).toString();

    // Replace the plaintext password with the encrypted password
    payload.password = encryptedPassword;

    let user = new Admin(payload);
    const result = await user.save();
    // console.log("User saved successfully:", result);

    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: error.message, success: false });
  }
}