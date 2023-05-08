const {
  UserDao,
  ProductDao,
  OrderDao,
  CartDao,
  SessionDao,
} = require("../daos/factory");
const ProductService = require("./ProductService");
const CartService = require("./CartService");
const OrderService = require("./OrderService");
const UserService = require("./UserService");
const SessionService = require("./SessionService");

const Product = new ProductService(new ProductDao());
const Cart = new CartService(new CartDao());
const User = new UserService(new UserDao());
const Order = new OrderService(new OrderDao());
const Session = new SessionService(new SessionDao());

module.exports = {
  Product,
  Cart,
  User,
  Order,
  Session,
};
