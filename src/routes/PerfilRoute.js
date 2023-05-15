const express = require("express");
const router = express.Router();
const perfilService = require("./../services/PerfilService");

//Rotas de Perfil
router.get("", perfilService.buscarUltimos);
router.get("/:id", perfilService.buscarPorId);
router.post("", perfilService.cadastrar);
router.put("/:id", perfilService.editar);
router.post("/conexao", perfilService.conectar);

module.exports = router;
