const orderModel = require("../../models/orderModel");
class OrderManager {
  constructor() {
    this.model = orderModel;
  }

  async createOrder(order) {
    try {
      return await this.model.create({ ...order });
    } catch (err) {
      throw new Error("Error al crear orden", err);
    }
  }
  async getOrders() {
    try {
      return await this.model.find({});
    } catch (err) {
      throw new Error("Error al buscar ordenes", err);
    }
  }
  async getOrderById(id) {
    const dataProd = await this.model.findById(id);
    if (dataProd) return { find, idx };
    else throw new Error("Orden no encontrada");
  }
  async updateOrder(id, newOrder) {
    try {
      const parsedId = new Types.ObjectId(id);
      await this.model.updateOne({ _id: parsedId }, newOrder);
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async deleteOrder(id) {
    try {
      const parsedId = new Types.ObjectId(id);
      const { deleteOrder } = await this.model.deleteOne({
        _id: parsedId,
      });
      return deleteOrder;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = OrderManager;
