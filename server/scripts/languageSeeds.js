const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/goBananas", { useNewUrlParser: true });
  // "mongodb://heroku_t906tgsp:pr9oig0jc05d6lcd9br4b6i3pf@ds113169.mlab.com:13169/heroku_t906tgsp"
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);


const languageSeeds = [
    {
      language: "Afrikaans",
      languageCode: "af"
    },
    {
      language: "Arabic",
      languageCode: "ar"
    },
    {
      language: "Bangla",
      languageCode: "bn"
    },
    {
      language: "Bosnian (Latin)",
      languageCode: "bs"
    },
    {
      language: "Bulgarian",
      languageCode: "bg"
    },
    {
      language: "Cantonese (Traditional)",
      languageCode: "yue"
    },
    {
      language: "Catalan",
      languageCode: "ca"
    },
    {
      language: "Chinese Simplified",
      languageCode: "zh-Hans"
    },
    {
      language: "Chinese Traditional",
      languageCode: "zh-Hant"
    },
    {
      language: "Croatian",
      languageCode: "hr"
    },
    {
      language: "Czech",
      languageCode: "cs"
    },
    {
      language: "Danish",
      languageCode: "da"
    },
    {
      language: "Dutch",
      languageCode: "nl"
    },
    {
      language: "English",
      languageCode: "en"
    },
    {
      language: "Estonian",
      languageCode: "et"
    },
    {
      language: "Fijian",
      languageCode: "fj"
    },
    {
      language: "Filipino",
      languageCode: "fil"
    },
    {
      language: "Finnish",
      languageCode: "fi"
    },
    {
      language: "French",
      languageCode: "fr"
    },
    {
      language: "German",
      languageCode: "de"
    },
    {
      language: "Greek",
      languageCode: "el"
    },
    {
      language: "Haitian Creole",
      languageCode: "ht"
    },
    {
      language: "Hebrew",
      languageCode: "he"
    },
    {
      language: "Hindi",
      languageCode: "hi"
    },
    {
      language: "Hmong Daw",
      languageCode: "mww"
    },
    {
      language: "Hungarian",
      languageCode: "hu"
    },
    {
      language: "Icelandic",
      languageCode: "is"
    },
    {
      language: "Indonesian",
      languageCode: "id"
    },
    {
      language: "Italian",
      languageCode: "it"
    },
    {
      language: "Japanese",
      languageCode: "ja"
    },
    {
      language: "Kiswahili",
      languageCode: "sw"
    },
    {
      language: "Klingon",
      languageCode: "tlh"
    },
    {
      language: "Klingon (plqaD)",
      languageCode: "tlh-Qaak"
    },
    {
      language: "Korean",
      languageCode: "ko"
    },
    {
      language: "latvian",
      languageCode: "lv"
    },
    {
      language: "lithuanian",
      languageCode: "lt"
    },
    {
      language: "Malagasy",
      languageCode: "mg"
    },
    {
      language: "Malay",
      languageCode: "ms"
    },
    {
      language: "Maltese",
      languageCode: "mt"
    },
    {
      language: "Norwegian",
      languageCode: "nb"
    },
    {
      language: "Persian",
      languageCode: "fa"
    },
    {
      language: "Polish",
      languageCode: "pl"
    },
    {
      language: "Portuguese",
      languageCode: "pt"
    },
    {
      language: "Queretaro Otomi",
      languageCode: "otq"
    },
    {
      language: "Romanian",
      languageCode: "ro"
    },
    {
      language: "Russian",
      languageCode: "ru"
    },
    {
      language: "Samoan",
      languageCode: "sm"
    },
    {
      language: "Serbian (Cyrillic)",
      languageCode: "sr-Cyrl"
    },
    {
      language: "Serbian (Latin)",
      languageCode: "sr-Latn"
    },
    {
      language: "Slovak",
      languageCode: "sk"
    },
    {
      language: "Slovenian",
      languageCode: "sl"
    },
    {
      language: "Spanish",
      languageCode: "es"
    },
    {
      language: "Swedish",
      languageCode: "sv"
    },
    {
      language: "Tahitian",
      languageCode: "ty"
    },
    {
      language: "Tamil",
      languageCode: "ta"
    },
    {
      language: "Telugu",
      languageCode: "te"
    },
    {
      language: "Thai",
      languageCode: "th"
    },
    {
      language: "Tongan",
      languageCode: "to"
    },
    {
      language: "Turkish",
      languageCode: "tr"
    },
    {
      language: "Ukrainian",
      languageCode: "uk"
    },
    {
      language: "Urdu",
      languageCode: "ur"
    },
    {
      language: "Vietnamese",
      languageCode: "vi"
    },
    {
      language: "Welsh",
      languageCode: "cy"
    },
    {
      language: "Yucatec Maya",
      languageCode: "yua"
    }
   ]

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
 