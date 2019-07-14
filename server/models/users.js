const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;