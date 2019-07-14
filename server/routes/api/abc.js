const router = require("express").Router();
const abc = require("../../controllers/abc");

// Matches with "/api/books"
router.route("/")
  .get(abc.findAll)
  .post(abc.create);

// Matches with "/api/gsearch/:id"
router
  .route("/:id")
  .get(abc.findById)
  .put(abc.update)
  .delete(abc.remove);

module.exports = router;
