const passport = require('passport');
const db = require('../models');

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
                auth: true,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                username: user.username,
                password: user.password,
                message: "user exists in db",
            });
        }
    })(req, res, next);
  },
  findById: (req, res, next) => {
    passport.authenticate('local-login', (err, user, info) => {
        if (err) {
            console.log(err);
        }
        if (info != undefined) {
            console.log(info.message);
            res.send(info.message);
        } else {
            req.logIn(user, err => {
                findOne({
                    where: {
                        username: user.username,
                    },
                }).then(user => {
                    const token = sign({ id: user.username }, secret);
                    res.status(200).send({
                        auth: true,
                        token: token,
                        message: "user exists and is logged in",
                    });
                });
            });
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
          username: user.username,
          password: user.password
        };
        Users.save({
          data
        })
          .then(() => {
            console.log('user create in db');
            res.status(200).send({ message: 'user created' });
          });
      }
    })(req, res, next);
  },
  update: function (req, res) {
    db.Users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
