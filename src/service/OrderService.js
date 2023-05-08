class OrderService {
  constructor(dao) {
    this.dao = dao;
  }

  async createOrder(order) {
    const result = await this.dao.createOrder(order);
    return result;
  }
  async getOrders() {
    const result = await this.dao.getOrders();
    return result;
  }
  async getOrderById(id) {
    const result = await this.dao.getOrderById(id);
    return result;
  }

  async updateOrder(id, newOrder) {
    const result = await this.dao.updateOrder(id, newOrder);
    return result;
  }
  async deleteOrder(id) {
    const result = await this.dao.deleteOrder(id);
    return result;
  }
}

module.exports = OrderService;
