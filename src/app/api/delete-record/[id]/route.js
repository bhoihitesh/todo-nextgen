// import mongoose from "mongoose"
// import {mongoDBURI} from "../../../../libs/db"
// import {Record} from "../../../../libs/schema/record"
// import { NextResponse } from "next/server"

// export async function DELETE(req,content) {
//     console.log('delete api', req, content)
//     try {
//         await mongoose.connect(mongoDBURI)
//         await Record.findByIdAndDelete(content.params.id);
//         return NextResponse.json({result: "Record has been successfully deleted", success: true}, {statusCode: 200});
//     } catch (error) {
//         console.log("Error while deleting record",error)
//     }
// }

import mongoose from "mongoose";
import { mongoDBURI } from "../../../../libs/db";
import { Record } from "../../../../libs/schema/record";
import { NextResponse } from "next/server";

// Handle DELETE request
export async function DELETE(req, content) {
  try {
    // Ensure the CORS headers are included for DELETE request
    const response = NextResponse.json(
      { result: "Record has been successfully deleted", success: true },
      { statusCode: 200 }
    );
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Allow-Credentials', 'true');

    // Perform the database delete operation
    await mongoose.connect(mongoDBURI);
    await Record.findByIdAndDelete(content.params.id);

    return response;
  } catch (error) {
    console.log("Error while deleting record", error);
    return NextResponse.json({ error: "Failed to delete record" }, { statusCode: 500 });
  }
}

// Handle OPTIONS request (for preflight)
export async function OPTIONS() {
  // Handle the CORS preflight request
  const response = NextResponse.json({ success: true });
  
  // CORS headers for preflight
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  
  return response;
}

