const router = require("express").Router();
const userRoutes = require("./users");

// google routes
router.use("/users", userRoutes);

module.exports = router;
