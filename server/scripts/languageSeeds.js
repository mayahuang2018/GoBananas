const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/goBananas"
  // "mongodb://heroku_t906tgsp:pr9oig0jc05d6lcd9br4b6i3pf@ds113169.mlab.com:13169/heroku_t906tgsp"
);


const languageSeeds = [
    {
      "Language": "Afrikaans",
      "Language code": "af"
    },
    {
      "Language": "Arabic",
      "Language code": "ar"
    },
    {
      "Language": "Bangla",
      "Language code": "bn"
    },
    {
      "Language": "Bosnian (Latin)",
      "Language code": "bs"
    },
    {
      "Language": "Bulgarian",
      "Language code": "bg"
    },
    {
      "Language": "Cantonese (Traditional)",
      "Language code": "yue"
    },
    {
      "Language": "Catalan",
      "Language code": "ca"
    },
    {
      "Language": "Chinese Simplified",
      "Language code": "zh-Hans"
    },
    {
      "Language": "Chinese Traditional",
      "Language code": "zh-Hant"
    },
    {
      "Language": "Croatian",
      "Language code": "hr"
    },
    {
      "Language": "Czech",
      "Language code": "cs"
    },
    {
      "Language": "Danish",
      "Language code": "da"
    },
    {
      "Language": "Dutch",
      "Language code": "nl"
    },
    {
      "Language": "English",
      "Language code": "en"
    },
    {
      "Language": "Estonian",
      "Language code": "et"
    },
    {
      "Language": "Fijian",
      "Language code": "fj"
    },
    {
      "Language": "Filipino",
      "Language code": "fil"
    },
    {
      "Language": "Finnish",
      "Language code": "fi"
    },
    {
      "Language": "French",
      "Language code": "fr"
    },
    {
      "Language": "German",
      "Language code": "de"
    },
    {
      "Language": "Greek",
      "Language code": "el"
    },
    {
      "Language": "Haitian Creole",
      "Language code": "ht"
    },
    {
      "Language": "Hebrew",
      "Language code": "he"
    },
    {
      "Language": "Hindi",
      "Language code": "hi"
    },
    {
      "Language": "Hmong Daw",
      "Language code": "mww"
    },
    {
      "Language": "Hungarian",
      "Language code": "hu"
    },
    {
      "Language": "Icelandic",
      "Language code": "is"
    },
    {
      "Language": "Indonesian",
      "Language code": "id"
    },
    {
      "Language": "Italian",
      "Language code": "it"
    },
    {
      "Language": "Japanese",
      "Language code": "ja"
    },
    {
      "Language": "Kiswahili",
      "Language code": "sw"
    },
    {
      "Language": "Klingon",
      "Language code": "tlh"
    },
    {
      "Language": "Klingon (plqaD)",
      "Language code": "tlh-Qaak"
    },
    {
      "Language": "Korean",
      "Language code": "ko"
    },
    {
      "Language": "Latvian",
      "Language code": "lv"
    },
    {
      "Language": "Lithuanian",
      "Language code": "lt"
    },
    {
      "Language": "Malagasy",
      "Language code": "mg"
    },
    {
      "Language": "Malay",
      "Language code": "ms"
    },
    {
      "Language": "Maltese",
      "Language code": "mt"
    },
    {
      "Language": "Norwegian",
      "Language code": "nb"
    },
    {
      "Language": "Persian",
      "Language code": "fa"
    },
    {
      "Language": "Polish",
      "Language code": "pl"
    },
    {
      "Language": "Portuguese",
      "Language code": "pt"
    },
    {
      "Language": "Queretaro Otomi",
      "Language code": "otq"
    },
    {
      "Language": "Romanian",
      "Language code": "ro"
    },
    {
      "Language": "Russian",
      "Language code": "ru"
    },
    {
      "Language": "Samoan",
      "Language code": "sm"
    },
    {
      "Language": "Serbian (Cyrillic)",
      "Language code": "sr-Cyrl"
    },
    {
      "Language": "Serbian (Latin)",
      "Language code": "sr-Latn"
    },
    {
      "Language": "Slovak",
      "Language code": "sk"
    },
    {
      "Language": "Slovenian",
      "Language code": "sl"
    },
    {
      "Language": "Spanish",
      "Language code": "es"
    },
    {
      "Language": "Swedish",
      "Language code": "sv"
    },
    {
      "Language": "Tahitian",
      "Language code": "ty"
    },
    {
      "Language": "Tamil",
      "Language code": "ta"
    },
    {
      "Language": "Telugu",
      "Language code": "te"
    },
    {
      "Language": "Thai",
      "Language code": "th"
    },
    {
      "Language": "Tongan",
      "Language code": "to"
    },
    {
      "Language": "Turkish",
      "Language code": "tr"
    },
    {
      "Language": "Ukrainian",
      "Language code": "uk"
    },
    {
      "Language": "Urdu",
      "Language code": "ur"
    },
    {
      "Language": "Vietnamese",
      "Language code": "vi"
    },
    {
      "Language": "Welsh",
      "Language code": "cy"
    },
    {
      "Language": "Yucatec Maya",
      "Language code": "yua"
    }
   ];
  
   db.Languages
   .remove({})
   .then(() => db.Languages.collection.insertMany(languageSeeds))
   .then(data => {
     console.log(data.result.n + " records inserted!");
     process.exit(0);
   })
   .catch(err => {
     console.error(err);
     process.exit(1);
   });
 