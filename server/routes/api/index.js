const router = require("express").Router();
const findUserRoutes = require("./findUser");
const loginUserRoutes = require("./loginUser");
const signupUserRoutes = require("./signupUser");

// routes
router.use("/findUser", findUserRoutes);
router.use("/login", loginUserRoutes);
router.use("/signup", signupUserRoutes);

module.exports = router;

