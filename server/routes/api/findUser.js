const authenticate = require ("passport");
const router = require("express").Router();
const Users = require("../../models/Users");

    router.route("/");
    router.get("/api/project3", (req, res, next) => {
        authenticate('jwt', { session: false }, (err, user, info) => {
            if(err) {
                console.log(err);
            }
            if(info != undefined) {
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
        }) (req, res, next);
    });

    module.exports = router;