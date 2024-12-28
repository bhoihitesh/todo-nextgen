const { default: mongoose } = require("mongoose");

const recordSchema = new mongoose.Schema({
    title: String,
    description: String,
    record_date: String,
    record_start_date: String,
})

export const Record = mongoose.models.records || mongoose.model("records",recordSchema);