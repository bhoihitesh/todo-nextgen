import mongoose from "mongoose"
import {mongoDBURI} from "../../../../libs/db"
import {Record} from "../../../../libs/schema/record"
import { NextResponse } from "next/server"

export async function DELETE(req,content) {
    try {
        await mongoose.connect(mongoDBURI)
        await Record.findByIdAndDelete(content.params.id);
        return NextResponse.json({result: "Record has been successfully deleted", success: true}, {statusCode: 200});
    } catch (error) {
        console.log("Error while deleting record",error)
    }
}