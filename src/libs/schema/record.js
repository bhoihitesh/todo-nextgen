const { default: mongoose } = require("mongoose");

const recordSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: String,
})

export const Record = mongoose.models.records || mongoose.model("records",recordSchema);