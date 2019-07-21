
const secret = require('../../config/jwtConfig');
const sign = require("jsonwebtoken");
const authenticate = require("passport");

module.exports = app => {
    app.get('/loginUser', (req, res, next) => {
        authenticate('login', (err, user, info) => {
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
    });
};

// https://itnext.io/implementing-json-web-tokens-passport-js-in-a-javascript-application-with-react-b86b1f313436