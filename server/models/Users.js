const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  email: { type: String, require: true, trim: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },
  password: { type: String, required: true, trim: true, validate: [input => input.length >= 6] },
  saved_idioms: { type: String }
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;