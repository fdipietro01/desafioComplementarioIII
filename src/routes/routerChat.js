const { Router } = require("express");
const passportAutenticate = require("../middlewares/passportAutenticate");
const passportAuthorize = require("../middlewares/passportAuthorize");
const { Chat } = require("../service/index");

const routerChat = Router();
routerChat.get(
  "/",
  passportAutenticate("current"),
  passportAuthorize("User"),
  (req, res) => {
    const io = req.app.get("socketio");
    io.on("connection", (socket) => {
      console.log("Conexión socket establecida");
      socket.emit("confirmConnection");

      socket.on("usrLogueado", async (name) => {
        const messages = await Chat.getMessages();
        socket.emit("chat", messages);
        socket.broadcast.emit("nuevoUsuarioAlerta", name);
      });

      socket.on("nuevoMsj", async (data) => {
        await Chat.addMessage(data);
        const newChat = await Chat.getMessages();
        io.emit("chat", newChat);
      });
    });
    res.status(200).send({ status: "success" });
  }
);

module.exports = routerChat;
