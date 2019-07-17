const router = require("express").Router();
const users = require("../../controllers/usersControllers");

// Matches with "/users/"
router.route("/")
  .get(users.findAll)
  .post(users.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(users.findById)
  .put(users.update)
  .delete(users.remove);

module.exports = router;
