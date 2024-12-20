import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { mongoDBURI } from "../../../libs/db";
import { Record } from "../../../libs/schema/record";
export async function GET() {
  let data = [];
  try {
    await mongoose.connect(mongoDBURI);
    data = await Record.find();
  } catch (error) {
    data = { success: false, message: error.message };
    console.error(error, "Error while getting records");
  }
  return NextResponse.json({ records: data, success: true });
}
