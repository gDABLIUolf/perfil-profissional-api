const app = require("./server");

const port = 3000;

app.listen(port, () => {
  console.log(`Perfil Profissional API rodando na porta ${port} ...`);
});
