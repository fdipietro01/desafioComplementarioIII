const { Order } = require("../service/index");

class OrderController {
  async getOrder(req, res) {
    try {
      const orders = await Order.getOrders();
      res.send(orders);
    } catch (err) {
      console.log(err.message);
      res.status(400).send(err);
    }
  }
  async createOrder(req, res) {
    const order = req.body;
    try {
      const added = await Order.createOrder(order);
      res.send(added);
    } catch (err) {
      console.log(err.message);
      res.status(400).send(err);
    }
  }
  async updateOrder(req, res) {
    const { oid } = req.params;
    const newOrder = req.body;
    if (!newProd) return res.status(400).send("Enviar orden a actualizar");
    try {
      await Order.updateOrder(oid, newOrder);
      res.status(200).json({ updated: "success" });
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
  async deleteOrder(req, res) {
    const { oid } = req.params;
    try {
      await Order.deleteOrder(oid);
      res.status(200).json({ deleted: "success" });
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}
module.exports = new OrderController();
