const express = require("express");
const session = require('express-session')
const passport = require("passport");

const mongoose = require("mongoose");
const router = require("./routes/api/index");
const app = express();
const PORT = process.env.PORT || 3001;

const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
app.use("/api", router);


app.use(
  session({ secret: "blahblahblah", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

if (process.env.NODE_ENV === "development") {
  app.use(express.static(path.join(_dirname, "client/build")));
} else if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "public")));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/goBananas", { useNewUrlParser: true });
// mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_t906tgsp:pr9oig0jc05d6lcd9br4b6i3pf@ds113169.mlab.com:13169/heroku_t906tgsp", { useNewUrlParser: true });

mongoose.set('userNewUrlParser', true);
mongoose.set('useCreateIndex', true);
  



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});