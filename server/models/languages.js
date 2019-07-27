const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languagesSchema = new Schema({
  language: { type: String, required: true, unique: true, trim: true },
  languageCode: {type: String, required: true, unique: true, trim: true}

});

const languages = mongoose.model("languages", languagesSchema);

module.exports = languages;