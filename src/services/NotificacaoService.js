let geradorID = 4;

//Estrutura de Dados
let notificacoes = [
  {
    id: 1,
    tipo: "Contato",
    titulo: "Notificação 1",
    descricao: "Esta é a notificação de número 1",
    lida: false,
    remetente: 2,
    destinatario: 3,
  },
  {
    id: 2,
    tipo: "Solicitação de amizade",
    titulo: "Notificação 2",
    descricao: "Esta é a notificação de número 2",
    lida: false,
    remetente: 3,
    destinatario: 4,
  },
  {
    id: 3,
    tipo: "Contato",
    titulo: "Notificação 3",
    descricao: "Esta é a notificação de número 3",
    lida: false,
    remetente: 4,
    destinatario: 5,
  },
];

module.exports = {
  buscarUltimos: (req, res) => {
    res.json(perfis.length > 5 ? perfis.slice(perfis.length - 5) : perfis);
  },

  buscarPorId: (req, res) => {
    let perfilID = req.params.id;
    let perfilEncontrado = perfis.find((perfil) => perfil.id == perfilID);
    if (perfilEncontrado) {
      res.json(perfilEncontrado);
    } else {
      res.status(400).json({
        message: "Erro ao buscar perfil : Objeto não encontrado",
      });
    }
  },

  cadastrar: (req, res) => {
    let novoPerfil = req.body;

    if (novoPerfil) {
      novoPerfil.id = geradorID;
      perfis.push(novoPerfil);
      geradorID++;
      res.json(novoPerfil);
    } else {
      res.status(400).json({
        message: "Erro ao cadastrar perfil : Dados incompletos",
      });
    }

    res.json();
  },

  editar: (req, res) => {
    let perfilID = req.params.id;
    let perfilEditado = req.body;
    if (perfilEditado) {
      let perfilIndex = perfis.findIndex((perfil) => perfil.id == perfilID);
      if (perfilIndex !== -1) {
        let perfilRetorno = perfis[perfilIndex];
        perfilEditado.id = perfilID;
        perfis.splice(perfilIndex, 1, perfilEditado);

        res.json(perfilRetorno);
      } else {
        res.status(200).json({
          message: "Erro ao editar perfil : Perfil não encontrado",
        });
      }
    } else {
      res.status(400).json({
        message: "Erro ao editar perfil : Dados incompletos",
      });
    }
    res.json();
  },

  conectar: (req, res) => {
    let info = req.body;

    if (info.remetente && info.destinatario) {
      let remetenteID = info.remetente;
      let destinatarioID = info.destinatario;

      let remetente = perfis.find((perfil) => perfil.id == remetenteID);
      let destinatario = perfis.find((perfil) => perfil.id == destinatarioID);

      if (remetente && destinatario) {
        remetente.conexoes.push(destinatarioID);
        destinatario.conexoes.push(remetenteID);

        res.json({
          message: "Conexão estabelecida com sucesso",
        });
      } else {
        res.json({
          message: "Erro ao estabelecer conexão : Perfil não encontrado",
        });
      }
    } else {
      res.status(400).json({
        message: "Erro ao estabelecer conexão : Dados incompletos",
      });
    }

    res.json();
  },
};
