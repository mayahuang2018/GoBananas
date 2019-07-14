const router = require("express").Router();
const abc = require("./abc");

// google routes
router.use("/abc", abc);

module.exports = router;
