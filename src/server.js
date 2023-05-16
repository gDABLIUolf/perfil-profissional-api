const express = require("express");
const perfilRoute = require("./routes/PerfilRoute");
const loginRoute = require("./routes/LoginRoute");
const notificacaoRoute = require("./routes/NotificacaoRoute");

const app = express();
const db = require("mongoose");

db.connect("mongodb+srv://gwolf:b0n9ytrgm1x22okX@cluster0.6s24grv.mongodb.net/?retryWrites=true&w=majority")

app.use(express.json());
app.use("/perfil", perfilRoute);
app.use("/notificacao", notificacaoRoute);
app.use("/login", loginRoute);

//Rota raiz
app.get("/", (req, res) => {
  res.send("Bem vindo ao perfil profissional API");
});

module.exports = app;
