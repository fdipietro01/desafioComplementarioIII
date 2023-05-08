class UserService {
  constructor(dao) {
    this.dao = dao;
  }
  async getAllUsers() {
    const usuarios = await this.dao.getAllUsers();
    return usuarios;
  }
  async getUser(email) {
    const usuarios = await this.dao.getSingleUser(email);
    return usuarios;
  }
  async createUser(user) {
    const usuarios = await this.dao.getSingleUser(user);
    return usuarios;
  }
  async updateUser(email, password) {
    const usuarios = await this.dao.updateUser(email, password);
    return usuarios;
  }
}

module.exports = UserService;
