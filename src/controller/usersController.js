const { User } = require("../service/index");

class UsuarioController {
  async getUsers(req, res) {
    const usuarios = await User.getAllUsers();
    res.status(200).send({
      usuarios,
    });
  }
  catch(err) {
    res.send({ error: err.message });
  }
}

module.exports = new UsuarioController();
