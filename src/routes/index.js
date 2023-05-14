const { Router } = require("express");
const routerUsuarios = require("./routerUsuarios");
const routerProductos = require("./routerProductos");
const routerCarritos = require("./routerCarritos");
const sessionsRouter = require("./routerSession");
const mailRouter = require("./routerMail");
const routerChat = require("./routerChat");

const router = Router();

router.use("/api/products", routerProductos);
router.use("/api/carts", routerCarritos);
router.use("/api/users", routerUsuarios);
router.use("/sessions", sessionsRouter);
router.use("/api/mail", mailRouter);
router.use("/api/chat", routerChat);

module.exports = router;
