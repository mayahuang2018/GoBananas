const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const idiomsSchema = new Schema({
    idiom: { type: String, required: true, unique: true, trim: true },
    meaning: { type: String, required: true, unique: true, trim: true},
    translation: { type: String, required: true, unique: true, trim: true}
});

const Idioms = mongoose.model("Idioms", idiomsSchema);

module.exports = Idioms;