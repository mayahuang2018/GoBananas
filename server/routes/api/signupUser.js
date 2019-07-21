
const passport = require('passport');
const router = require("express").Router();
const Users = require("../../models/Users");

    router.post('/api/Users', (req, res, next) => {
        passport.authenticate('signup', (err, user, info) => {
            if (err) {
                console.log(err);
            }
            if (info != undefined) {
                console.log(info.message);
                res.status(403).send(info.message);
            } else {
                req.logIn(Users, err => {
                    console.log(Users);
                    const data = {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        username: user.username,
                    };
                    Users.findOne({
                        where: {
                            username: data.username
                        },
                    }).then(Users => {
                        Users
                            .update({
                                first_name: data.first_name,
                                last_name: data.last_name,
                                email: data.email,
                            })
                            .then(() => {
                                console.log('user create in db');
                                res.status(200).send({ message: 'user created' });
                            });
                    });
                });
            }
        })(req, res, next);
    });

    module.exports = router;