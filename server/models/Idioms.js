const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdiomsSchema = new Schema({
    idiom: { type: String, required: true, trim: true },
    idiom: { type: String, required: true, trim: true },
    idiom: { type: String, required: true, trim: true },
});

const Idioms = mongoose.model("Idioms", IdiomsSchema);

module.exports = Idioms;