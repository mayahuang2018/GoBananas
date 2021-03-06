const router = require("express").Router();
const findUserRoutes = require("./findUser");
const loginUserRoutes = require("./loginUser");
const signupUserRoutes = require("./signupUser");
const languagesRoutes = require("./languages");
const idiomsRoutes = require("./idioms");

// routes
router.use("/findUser", findUserRoutes);
router.use("/login", loginUserRoutes);
router.use("/signup", signupUserRoutes);
router.use("/languages", languagesRoutes);
router.use("/idioms", idiomsRoutes);

module.exports = router;

// change