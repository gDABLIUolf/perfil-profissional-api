module.exports = {
  verificarToken: (request) => {
    let token = request.headers["token"];

    if (!token) {
      return {
        autorizado: false,
        message: "Erro ao acessar recurso : Token não informado",
      };
    } else {
      if (token == "Fabricadeprogramador") {
        return {
          autorizado: true,
          message: "",
        };
      } else {
        return {
          autorizado: false,
          message: "Erro ao acessar recurso : Token inválido",
        };
      }
    }
  },
};
