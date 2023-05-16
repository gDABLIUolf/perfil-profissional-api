const express = require("express");
const router = express.Router();
const loginService = require("./../services/LoginService");

//Rotas de Perfil
router.post("", loginService.autenticar);

module.exports = router;
