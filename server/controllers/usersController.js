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
                        username: user.username,
                    },
                }).then(user => {
                    const token = sign({ id: user.username }, secret);
                    res.status(200).send({
                        auth: true,
                        token: token,
                        message: "user exists and is logged in",
                    });
                })
                .catch(err => console.log(err.response, "100"));
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
        users.create({
          data 
        })
          .then(() => {
            console.log(data);
            res.json(data);
            res.status(200).send({ message: 'user created' });
          })
          .catch(err => console.log(err.res, "100")); 
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
