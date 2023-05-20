const express = require("express");
const perfilRoute = require("./routes/PerfilRoute");
const loginRoute = require("./routes/LoginRoute");
const notificacaoRoute = require("./routes/NotificacaoRoute");

const cors = require("cors")
const app = express();
const db = require("./database");

db.connect();

app.use(cors({
  origin: "*"
}))
app.use(express.json());
app.use("/perfil", perfilRoute);
app.use("/notificacao", notificacaoRoute);
app.use("/login", loginRoute);

//Rota raiz
app.get("/", (req, res) => {
  res.send("Bem vindo ao perfil profissional API");
});

module.exports = app;
