const userModel = require("../../models/userSchema");

class UserManager {
  constructor() {
    this.model = userModel;
  }
  async getAllUsers() {
    try {
      //const { page = 1 } = req.query;
      //const usuarios = await this.model.paginate({}, { limit: 1, page, lean: true }); // variante con paginado
      const usuarios = await this.model.find({}).lean();
      return usuarios;
    } catch (err) {
      throw new Error("Error buscar usuarios", err);
    }
  }
  async getUser(email) {
    try {
      const usuario = await this.model.findOne({ email }).lean();
      return usuario;
    } catch (err) {
      throw new Error("Error al buscar usuario", err);
    }
  }
  async createUser(user) {
    try {
      const a = await this.model.create(user);
    } catch (err) {
      throw new Error("Error al crear usuario", err);
    }
  }
  async updateUser(email, password) {
    await this.model.findOneAndUpdate({ email }, { password });
  }
}

module.exports = UserManager;
