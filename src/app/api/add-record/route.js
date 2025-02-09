import mongoose from "mongoose";
import {mongoDBURI} from "../../../libs/db"
import {Record} from "../../../libs/schema/record"
import { NextResponse } from "next/server";
export async function POST(req,res) {
    const payload = await req.json();
    try {
        await mongoose.connect(mongoDBURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
          });
        const res = await Record.insertMany(payload);
        return NextResponse.json({result: "Record inserted successfully", success: true},{status: 201})
    } catch (error) {
        console.error("Error while adding record", error);
        return NextResponse.json({ result: "Record insertion failed", success: false, error: error.message }, { status: 500 });
    }
}