const router = require("express").Router();
const languagesController = require("../../controllers/languagesController");

router.route("/").get(languagesController.findAll)

module.exports = router;  