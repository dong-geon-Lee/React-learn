const express = require("express");
const {
  getCart,
  addCart,
  updateCart,
  deleteCart,
} = require("../controller/cartController");
const router = express.Router();

router.route("/").get(getCart).post(addCart);
router.route("/:id").put(updateCart).delete(deleteCart);

module.exports = router;
