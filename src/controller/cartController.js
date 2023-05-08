const { Cart, Product } = require("../service/index");

class CartController {
  async getProductsFromCart(req, res) {
    const { cid } = req.params;
    try {
      const cartProducts = await Cart.getProductsfromCart(cid);
      const { payload: catalogProducts } = await Product.getProducts();
      const cartExist = cartProducts.length;
      const catalogExists = catalogProducts.length;
      res.render("editCarritos", {
        cartProducts,
        catalogProducts,
        cartExist,
        catalogExists,
        id: cid,
      });
    } catch (err) {
      res.send({ error: err.message });
    }
  }
  async crearCarrito(req, res) {
    const cart = await Cart.addCart();
    res.send({ id: cart._id });
  }
}

module.exports = new CartController();
