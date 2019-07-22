const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/").get(usersController.findOne)

module.exports = router;  