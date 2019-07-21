// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const UsersSchema = new Schema({
//   first_name: { type: String, required: true, trim: true },
//   last_name: { type: String, required: true, trim: true },
//   email: { type: String, require: true, trim: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },
//   username: { type: String, required: true, trim: true },
//   password: { type: String, required: true, trim: true, validate: [input => input.length >= 6] },
// });

// const Users = mongoose.model("Users", UsersSchema);

// module.exports = Users;