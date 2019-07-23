const passport = require('passport');
const users = require('../models/Users');

// Defining methods for the booksController
module.exports = {
  findAll: (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.send(info.message);
      } else {
        console.log('user found in db');
        res.status(200).send({
          loggedIn: true,
          user: req.user,
        });
      }
    })(req, res, next);
  },
  findOne: (req, res, next) => {
    console.log("login route");
    passport.authenticate('local-login', (err, user, info) => {
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
  create: (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.status(403).send(info.message);
      } else {
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
            console.log(data);
            //must return response
            return res.status(200).json(data); 
          })
          .catch(err => console.log(err, "100"));
      }
    })(req, res, next);
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
};
