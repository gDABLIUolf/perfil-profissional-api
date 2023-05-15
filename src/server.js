const express = require("express");
const perfilRoute = require("./routes/PerfilRoute");
const notificacaoRoute = require("./routes/NotificacaoRoute");

const app = express();
app.use(express.json());
app.use("/perfil", perfilRoute);
app.use("/notificacao", notificacaoRoute);

//Rota raiz
app.get("/", (req, res) => {
  res.send("Bem vindo ao perfil profissional API");
});

module.exports = app;
