const express = require("express");

const passport = require("passport");
require("./config/passport")(passport);

const db = require("./models");
const path = require("path")

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
