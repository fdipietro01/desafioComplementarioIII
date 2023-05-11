const {
  UserDao,
  ProductDao,
  CartDao,
  SessionDao,
  TicketDao,
} = require("../daos/factory");
const ProductService = require("./ProductService");
const CartService = require("./CartService");
const UserService = require("./UserService");
const SessionService = require("./SessionService");
const TicketService = require("./TicketService");

const Product = new ProductService(new ProductDao());
const Cart = new CartService(new CartDao());
const User = new UserService(new UserDao());
const Session = new SessionService(new SessionDao());
const Ticket = new TicketService(new TicketDao());

module.exports = {
  Product,
  Cart,
  User,
  Session,
  Ticket,
};
