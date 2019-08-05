const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/goBananas", { useNewUrlParser: true });
  // "mongodb://heroku_t906tgsp:pr9oig0jc05d6lcd9br4b6i3pf@ds113169.mlab.com:13169/heroku_t906tgsp"

  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);

const usersSeeds = [
  {
    first_name: "testingtesting",
    last_name: "testytesty",
    username: "tester1",
    email: "testy@tester.com",
    password: "1234567890"
  }]

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(usersSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

