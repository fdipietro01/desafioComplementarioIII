const fs = require("fs");

class OrderManager {
  constructor(path) {
    this.path = path;
  }
  createOrder = async (order) => {
    try {
      const data = await this.getOrders();
      data.length === 0
        ? (order.id = 1)
        : (order.id = data[data.length - 1].id + 1);
      const newData = JSON.stringify([...data, order]);
      await fs.promises.writeFile(this.path, newData, "utf-8");
      return order;
    } catch (err) {
      throw new Error("Error al crear el orden", err);
    }
  };

  getOrders = async (id) => {
    if (fs.existsSync(this.path)) {
      try {
        const data = await fs.promises.readFile(this.path);
        const dataParsed = JSON.parse(data);
        return dataParsed;
      } catch (err) {
        throw new Error("Error al leer ordenes", err);
      }
    } else {
      await fs.promises.writeFile(this.path, "[]", "utf-8");
      return [];
    }
  };

  getOrdersById = async (id) => {
    const data = await this.getProducts();
    const find = data.find((prod) => prod.id === id);
    const idx = data.findIndex((prod) => prod.id === id);
    if (find) return { find, idx };
    else throw new Error("Orden no encontrada");
  };

  updateOrder = async (id, prod) => {
    try {
      const orders = await this.getProducts();
      const { find, idx } = await this.getProductById(Number(id));
      if (find) {
        orders[idx] = find;
        const newOrders = [...orders];
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(newOrders),
          "utf-8"
        );
        return { updated: find };
      }
      return {};
    } catch (err) {
      throw new Error(err.message);
    }
  };

  deleteProduct = async (id) => {
    try {
      const orders = await this.getProducts();
      const { find, idx } = await this.getProductById(Number(id));
      if (find) {
        orders.splice(idx, 1);
        const newOrders = [...orders];
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(newOrders),
          "utf-8"
        );
        return { deleted: find };
      }
      return {};
    } catch (err) {
      throw new Error(err.message);
    }
  };
}

module.exports = OrderManager;
