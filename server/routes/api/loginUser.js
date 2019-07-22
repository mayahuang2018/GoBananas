const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/")
    .post(usersController.findById)

module.exports = router;