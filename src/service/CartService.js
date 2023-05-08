class CartService {
  constructor(dao) {
    this.dao = dao;
  }

  async getCartProducts(cid) {
    const result = await this.dao.getCartProducts(cid);
    return result;
  }

  async updateProductQuantityFromCart(cid, pid, quantity) {
    const result = await this.updateProductQuantityFromCart(cid, pid, quantity);
    return result;
  }

  async updateProductsFromCart(cid, productos) {
    const result = await updateProductsFromCart(cid, productos);
    return result;
  }

  async deleteSingleProductFromCart(cid, pid) {
    const result = await this.deleteSingleProductFromCart(cid, pid);
    return result;
  }

  async deleteAllProductsFromCart(cid) {
    const result = deleteAllProductsFromCart(cid);
    return result;
  }
}

module.exports = CartService;
