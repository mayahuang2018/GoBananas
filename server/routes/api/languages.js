const router = require("express").Router();
const languagesController = require("../../controllers/languagesController");

router.route("/").post(languagesController.findAll)

module.exports = router;  