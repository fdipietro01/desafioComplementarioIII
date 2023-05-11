const { Router } = require("express");
const routerUsuarios = require("./routerUsuarios");
const routerProductos = require("./routerProductos");
const routerCarritos = require("./routerCarritos");
const sessionsRouter = require("./routerSession");
const mailRouter = require("./routerMail");

const router = Router();

router.use("/api/products", routerProductos);
router.use("/api/carts", routerCarritos);
router.use("/api/users", routerUsuarios);
router.use("/sessions", sessionsRouter);
router.use("/api/mail", mailRouter);

module.exports = router;
