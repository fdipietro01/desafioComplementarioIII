const { Cart, Product } = require("../service/index");

class CartController {
  async crearCarrito(req, res) {
    const cart = await Cart.addCart();
    res.status(200).send({ id: cart._id });
  }
  async getProductsFromCart(req, res) {
    const { cid } = req.params;

    try {
      const cartProducts = await Cart.getCartProducts(cid);
      return res.status(200).send({ stauts: "success", cartProducts });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  }
  async updateProductQuantityFromCart(req, res) {
    const { cid, pid, quantity } = req.body;
    try {
      await Cart.updateProductQuantityFromCart(cid, pid, quantity);
      res.status(200).send({ status: "success" });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  }

  async deleteCart(req, res) {
    const { cid } = req.params;
    try {
      await Cart.deleteAllProductsFromCart(cid);
      res.status(200).send({ status: "success" });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  }

  async deleteSingleProduct(req, res) {
    const { cid, pid } = req.params;
    try {
      await Cart.deleteSingleProductFromCart(cid, pid);
      res.status(200).send({ status: "success" });
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  }
}

module.exports = new CartController();
