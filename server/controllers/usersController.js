const passport = require('passport');
const users = require('../models/Users');
const bc = require("bcryptjs")

// Defining methods for the booksController
module.exports = {
  findAll: (req, res, next) => {
    console.log("jwt route");
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        return res.send(info.message);
      } else {
        console.log('user found in db');
        return res.status(200).send({
          loggedIn: true,
          user: req.user,
        });
      }
    })(req, res, next);
  },
  findOne: (req, res, next) => {
    console.log("login route");
    passport.authenticate('local-login', (err, username, info) => {
      console.log("authenticating");
      console.log(username);
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        users.findOne({
          where: {
            username: username,
          },
        }).then(user => {
          const token = sign({ id: user.username }, secret);
          return res.status(200).send({
            auth: true,
            token: token,
            message: "user exists and is logged in",
          });
        })
          .catch(err => console.log(err, "200"));
      }
    })(req, res, next);
  },
  create: (req, res) => {
    console.log("say nothing!");

    // const generateHash = password => {
    //   return bc.hashSync(password, bc.genSaltSync(8), null);
    // };

    // // store the user password as a hash
    // const userPassword = generateHash(password);
    // console.log(userPassword, "password");

    const data = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    };
    users.create(
      data
    )
      .then(() => {
        console.log("then", data);
        //must return response
        return res.status(200).json({ success: true });
      })
      .catch(err => console.log(err, "100"));
  },

  update: function (req, res) {
    db.users
      .updateOne({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.deleteOne())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
