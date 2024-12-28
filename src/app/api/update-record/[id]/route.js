import mongoose from "mongoose"
import {mongoDBURI} from "../../../../libs/db"
import {Record} from "../../../../libs/schema/record"
import { NextResponse } from "next/server";

export async function PUT(req, content) {
    const payload = await req.json()
    try {
        await mongoose.connect(mongoDBURI)
        await Record.findByIdAndUpdate(content.params.id, payload.payloadToUpdate)
        return NextResponse.json({result: "Record has been successfully updated", success: true}, {statusCode: 200});
    } catch (error) {
        console.log("Error while updating record",error)
    }
}