const config = require("../config/config");
let ProductDao;
let UserDao;
let CartDao;
let OrderDao;
let SessionDao;

switch (config.persistence) {
  case "MONGO":
    config.dbConection();
    ProductDao = require("./mongoDaos/ProductManager");
    UserDao = require("./mongoDaos/UsersManager");
    CartDao = require("./mongoDaos/CartManager");
    OrderDao = require("./mongoDaos/OrderManager");
    SessionDao = require("./mongoDaos/UsersManager");
    break;
  case "MEMORY":
    ProductDao = require("./fsDaos/ProductManager");
    UserDao = require("./fsDaos/ProductManager");
    CartDao = require("./fsDaos/CartManager");
    OrderDao = require("./fsDaos/OrderMaganer");
    SessionDao = require("./fsDaos/UserManager");
    break;
}

module.exports = { ProductDao, UserDao, CartDao, OrderDao, SessionDao };
