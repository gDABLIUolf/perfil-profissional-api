let geradorID = 8;

//Estrutura de Dados

let self = (module.exports = {
  perfis: [
    {
      usuario: {
        email: "jao@email.com",
        senha: "12345",
      },
      id: 1,
      nome: "Jão da Silva",
      dataNascimento: "2022-02-14T00:00:00.000Z",
      disponibilidadeMudanca: true,
      disponibilidadeHorario: "Integral",
      educacao: [
        {
          instituicao: "Escola 1",
          ingresso: "2012-02-28T00:00:00.000Z",
          conclusao: "2015-02-28T00:00:00.000Z",
          nivelEscolaridade: "Ensino Superior",
        },
      ],
      certificacoes: [
        {
          instituicao: "High Tech Cursos",
          titulo: "Fábrica de Programador",
          cargaHoraria: 80,
        },
      ],
      conexoes: [],
    },
    {
      usuario: {
        email: "maria@email.com",
        senha: "123456666",
      },
      id: 2,
      nome: "Maria da Silva",
      dataNascimento: "2022-02-14T00:00:00.000Z",
      disponibilidadeMudanca: true,
      disponibilidadeHorario: "Meio Período",
      educacao: [
        {
          instituicao: "Escola 1",
          ingresso: "2012-02-28T00:00:00.000Z",
          conclusao: "2015-02-28T00:00:00.000Z",
          nivelEscolaridade: "Ensino Superior",
        },
      ],
      certificacoes: [
        {
          instituicao: "High Tech Cursos",
          titulo: "Fábrica de Programador",
          cargaHoraria: 80,
        },
      ],
      conexoes: [],
    },
    {
      usuario: {
        email: "ze@email.com",
        senha: "123",
      },
      id: 3,
      nome: "Zé Araujo",
      dataNascimento: "2022-02-14T00:00:00.000Z",
      disponibilidadeMudanca: true,
      disponibilidadeHorario: "Integral",
      educacao: [
        {
          instituicao: "Escola 1",
          ingresso: "2012-02-28T00:00:00.000Z",
          conclusao: "2015-02-28T00:00:00.000Z",
          nivelEscolaridade: "Ensino Superior",
        },
      ],
      certificacoes: [
        {
          instituicao: "High Tech Cursos",
          titulo: "Fábrica de Programador",
          cargaHoraria: 80,
        },
      ],
      conexoes: [],
    },
    {
      usuario: {
        email: "leonardo@email.com",
        senha: "123",
      },
      id: 4,
      nome: "Leonardo Fernandes",
      dataNascimento: "2022-02-14T00:00:00.000Z",
      disponibilidadeMudanca: true,
      disponibilidadeHorario: "Integral",
      educacao: [
        {
          instituicao: "Escola 1",
          ingresso: "2012-02-28T00:00:00.000Z",
          conclusao: "2015-02-28T00:00:00.000Z",
          nivelEscolaridade: "Ensino Superior",
        },
      ],
      certificacoes: [
        {
          instituicao: "High Tech Cursos",
          titulo: "Fábrica de Programador",
          cargaHoraria: 80,
        },
      ],
      conexoes: [],
    },
    {
      usuario: {
        email: "gabriela@email.com",
        senha: "12345111",
      },
      id: 5,
      nome: "Gabriela Souza",
      dataNascimento: "2022-02-14T00:00:00.000Z",
      disponibilidadeMudanca: true,
      disponibilidadeHorario: "Integral",
      educacao: [
        {
          instituicao: "Escola 1",
          ingresso: "2012-02-28T00:00:00.000Z",
          conclusao: "2015-02-28T00:00:00.000Z",
          nivelEscolaridade: "Ensino Superior",
        },
      ],
      certificacoes: [
        {
          instituicao: "High Tech Cursos",
          titulo: "Fábrica de Programador",
          cargaHoraria: 80,
        },
      ],
      conexoes: [],
    },
    {
      usuario: {
        email: "beatriz@email.com",
        senha: "123",
      },
      id: 6,
      nome: "Beatriz de Almeida",
      dataNascimento: "2022-02-14T00:00:00.000Z",
      disponibilidadeMudanca: true,
      disponibilidadeHorario: "Integral",
      educacao: [
        {
          instituicao: "Escola 1",
          ingresso: "2012-02-28T00:00:00.000Z",
          conclusao: "2015-02-28T00:00:00.000Z",
          nivelEscolaridade: "Ensino Superior",
        },
      ],
      certificacoes: [
        {
          instituicao: "High Tech Cursos",
          titulo: "Fábrica de Programador",
          cargaHoraria: 80,
        },
      ],
      conexoes: [],
    },
    {
      usuario: {
        email: "felipe@email.com",
        senha: "123",
      },
      id: 7,
      nome: "Felipe Magalhães",
      dataNascimento: "2022-02-14T00:00:00.000Z",
      disponibilidadeMudanca: true,
      disponibilidadeHorario: "Integral",
      educacao: [
        {
          instituicao: "Escola 1",
          ingresso: "2012-02-28T00:00:00.000Z",
          conclusao: "2015-02-28T00:00:00.000Z",
          nivelEscolaridade: "Ensino Superior",
        },
      ],
      certificacoes: [
        {
          instituicao: "High Tech Cursos",
          titulo: "Fábrica de Programador",
          cargaHoraria: 80,
        },
      ],
      conexoes: [],
    },
  ],

  buscarUltimos: (req, res) => {
    res.json(self.perfis.length > 5 ? self.perfis.slice(self.perfis.length - 5) : perfis);
  },

  buscarPorId: (req, res) => {
    let perfilID = req.params.id;
    let perfilEncontrado = self.perfis.find((perfil) => perfil.id == perfilID);
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
      self.perfis.push(novoPerfil);
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
      let perfilIndex = self.perfis.findIndex((perfil) => perfil.id == perfilID);
      if (perfilIndex !== -1) {
        let perfilRetorno = perfis[perfilIndex];
        perfilEditado.id = perfilID;
        self.perfis.splice(perfilIndex, 1, perfilEditado);

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

      let remetente = self.perfis.find((perfil) => perfil.id == remetenteID);
      let destinatario = self.perfis.find(
        (perfil) => perfil.id == destinatarioID
      );

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
  },
});
