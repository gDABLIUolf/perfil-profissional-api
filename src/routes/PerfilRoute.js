const express = require("express");
const router = express.Router();
const { verificar } = require("./../middleware/AutenticacaoMiddleware");
const perfilService = require("./../services/PerfilService");

//Rotas de Perfil
router.get("", perfilService.buscarUltimos);
router.get("/:id", perfilService.buscarPorId);
router.post("", perfilService.cadastrar);
router.put("/:id", verificar, perfilService.editar);
router.post("/conexao", verificar, perfilService.conectar);

module.exports = router;
