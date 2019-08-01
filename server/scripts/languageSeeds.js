const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/goBananas", { useNewUrlParser: true });
  // "mongodb://heroku_t906tgsp:pr9oig0jc05d6lcd9br4b6i3pf@ds113169.mlab.com:13169/heroku_t906tgsp"



const languageSeeds = [
    {
      "Language": "Afrikaans",
      "Language_code": "af"
    },
    {
      "Language": "Arabic",
      "Language_code": "ar"
    },
    {
      "Language": "Bangla",
      "Language_code": "bn"
    },
    {
      "Language": "Bosnian (Latin)",
      "Language_code": "bs"
    },
    {
      "Language": "Bulgarian",
      "Language_code": "bg"
    },
    {
      "Language": "Cantonese (Traditional)",
      "Language_code": "yue"
    },
    {
      "Language": "Catalan",
      "Language_code": "ca"
    },
    {
      "Language": "Chinese Simplified",
      "Language_code": "zh-Hans"
    },
    {
      "Language": "Chinese Traditional",
      "Language_code": "zh-Hant"
    },
    {
      "Language": "Croatian",
      "Language_code": "hr"
    },
    {
      "Language": "Czech",
      "Language_code": "cs"
    },
    {
      "Language": "Danish",
      "Language_code": "da"
    },
    {
      "Language": "Dutch",
      "Language_code": "nl"
    },
    {
      "Language": "English",
      "Language_code": "en"
    },
    {
      "Language": "Estonian",
      "Language_code": "et"
    },
    {
      "Language": "Fijian",
      "Language_code": "fj"
    },
    {
      "Language": "Filipino",
      "Language_code": "fil"
    },
    {
      "Language": "Finnish",
      "Language_code": "fi"
    },
    {
      "Language": "French",
      "Language_code": "fr"
    },
    {
      "Language": "German",
      "Language_code": "de"
    },
    {
      "Language": "Greek",
      "Language_code": "el"
    },
    {
      "Language": "Haitian Creole",
      "Language_code": "ht"
    },
    {
      "Language": "Hebrew",
      "Language_code": "he"
    },
    {
      "Language": "Hindi",
      "Language_code": "hi"
    },
    {
      "Language": "Hmong Daw",
      "Language_code": "mww"
    },
    {
      "Language": "Hungarian",
      "Language_code": "hu"
    },
    {
      "Language": "Icelandic",
      "Language_code": "is"
    },
    {
      "Language": "Indonesian",
      "Language_code": "id"
    },
    {
      "Language": "Italian",
      "Language_code": "it"
    },
    {
      "Language": "Japanese",
      "Language_code": "ja"
    },
    {
      "Language": "Kiswahili",
      "Language_code": "sw"
    },
    {
      "Language": "Klingon",
      "Language_code": "tlh"
    },
    {
      "Language": "Klingon (plqaD)",
      "Language_code": "tlh-Qaak"
    },
    {
      "Language": "Korean",
      "Language_code": "ko"
    },
    {
      "Language": "Latvian",
      "Language_code": "lv"
    },
    {
      "Language": "Lithuanian",
      "Language_code": "lt"
    },
    {
      "Language": "Malagasy",
      "Language_code": "mg"
    },
    {
      "Language": "Malay",
      "Language_code": "ms"
    },
    {
      "Language": "Maltese",
      "Language_code": "mt"
    },
    {
      "Language": "Norwegian",
      "Language_code": "nb"
    },
    {
      "Language": "Persian",
      "Language_code": "fa"
    },
    {
      "Language": "Polish",
      "Language_code": "pl"
    },
    {
      "Language": "Portuguese",
      "Language_code": "pt"
    },
    {
      "Language": "Queretaro Otomi",
      "Language_code": "otq"
    },
    {
      "Language": "Romanian",
      "Language_code": "ro"
    },
    {
      "Language": "Russian",
      "Language_code": "ru"
    },
    {
      "Language": "Samoan",
      "Language_code": "sm"
    },
    {
      "Language": "Serbian (Cyrillic)",
      "Language_code": "sr-Cyrl"
    },
    {
      "Language": "Serbian (Latin)",
      "Language_code": "sr-Latn"
    },
    {
      "Language": "Slovak",
      "Language_code": "sk"
    },
    {
      "Language": "Slovenian",
      "Language_code": "sl"
    },
    {
      "Language": "Spanish",
      "Language_code": "es"
    },
    {
      "Language": "Swedish",
      "Language_code": "sv"
    },
    {
      "Language": "Tahitian",
      "Language_code": "ty"
    },
    {
      "Language": "Tamil",
      "Language_code": "ta"
    },
    {
      "Language": "Telugu",
      "Language_code": "te"
    },
    {
      "Language": "Thai",
      "Language_code": "th"
    },
    {
      "Language": "Tongan",
      "Language_code": "to"
    },
    {
      "Language": "Turkish",
      "Language_code": "tr"
    },
    {
      "Language": "Ukrainian",
      "Language_code": "uk"
    },
    {
      "Language": "Urdu",
      "Language_code": "ur"
    },
    {
      "Language": "Vietnamese",
      "Language_code": "vi"
    },
    {
      "Language": "Welsh",
      "Language_code": "cy"
    },
    {
      "Language": "Yucatec Maya",
      "Language_code": "yua"
    }
   ]

   db.Languages
  .deleteMany({})
  .then(() => db.Languages.collection.insertMany(languageSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
 