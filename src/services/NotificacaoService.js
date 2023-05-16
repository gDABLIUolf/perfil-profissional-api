const tokenUtils = require("./../utils/TokenUtil");

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
  buscarPorId: (req, res) => {
    const verificacaoToken = tokenUtils.verificarToken(req);

    if (verificacaoToken.autorizado) {
      let notificacaoID = req.params.id;
      let notificacaoEncontrada = notificacoes.find(
        (notificacao) => notificacao.id == notificacaoID
      );
      if (notificacaoEncontrada) {
        res.json(notificacaoEncontrada);
      } else {
        res.status(400).json({
          message: "Erro ao buscar notificacao : Objeto não encontrado",
        });
      }
    } else {
      res.status(401).json({
        message: verificacaoToken.message,
      });
    }
  },

  cadastrar: (req, res) => {
    let novaNotificacao = req.body;

    if (novaNotificacao) {
      novaNotificacao.id = geradorID;
      notificacoes.push(novaNotificacao);
      geradorID++;
      res.json(novaNotificacao);
    } else {
      res.status(400).json({
        message: "Erro ao cadastrar notificação : Dados incompletos",
      });
    }
  },

  buscarPorPerfilId: (req, res) => {
    let perfilID = req.params.id;
    let resposta = notificacoes.filter(
      (notificacao) =>
        notificacao.destinatario == perfilID ||
        notificacao.remetente == perfilID
    );
    res.json(resposta);
  },

  marcarLida: (req, res) => {
    let notificacaoID = req.params.id;
    let notificacaoEncontrada = notificacoes.find(
      (notificacao) => notificacao.id == notificacaoID
    );

    if (notificacaoEncontrada) {
      notificacaoEncontrada.lida = true;
      res.json({
        message: "Mensagem marcada como lida",
      });
    } else {
      res.json({
        message:
          "Erro ao marcar notificação como lida : Notificação não encontrada",
      });
    }
  },
};
