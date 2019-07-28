const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/goBananas"
);

const usersSeeds = [
  {
    first_name: "testingtesting",
    last_name: "testytesty",
    username: "tester1",
    email: "testy@tester.com",
    password: "1234567890"
  }]

db.users
  .deleteMany({})
  .then(() => db.users.collection.insertMany(usersSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

