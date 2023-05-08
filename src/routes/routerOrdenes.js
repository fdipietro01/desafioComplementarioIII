const { Router } = require("express");
const passportAutenticate = require("../middlewares/passportAutenticate");
const orederRouter = Router();
const {
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controller/orderController");

orederRouter
  .get("/", getOrder)
  .post("/:oid", createOrder)
  .put("/:oid", updateOrder)
  .delete("/:oid", deleteOrder);

module.exports = orederRouter;
