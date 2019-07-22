
// const express = require("express")
const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/signup").post(usersController.create)


module.exports = router;