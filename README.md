# Perfil Profissional

projeto perfil profissional, implementado no modulo 2 do curso Fábrica de programador em High Tech Cursos

Este projeto implementa uma **API** em **NodeJS**, utilizando  express como gerenciador de requisições **HTTP**, banco de  dados não relacional **MongoDB** e o framework ODM  **Mongoose** para intermediar a comunicação entre a  aplicação e o banco de dados.  

O projeto trata-se de uma  aplicação de gerenciamento de perfis profissionais e  conexões entre eles. Portato é possível cadastrar perfis, conectar perfis e a comunicação entre  perfis por meio de notificações.

Este documento tem por objetivo detalhar os elementos presentes no projeto do Perfil Profissional, incluindo dependências, *scripts* de execução, definição de entidades e *endpoints*.

---

## Entidades
- Perfil
- Notificação

## Perfil
Atributo | Tipo
--- | ---
nome| String*
dataNascimento| Date*
disponibilidadedeMudanca| Boolean*
disponibilidadedeHorario| Enum [ Meio Período, Integral* ]
skills| Array< String* >
educacao| Array< Educacao* >
certificacoes| Array< Certificacao >
experiencias| Array< Experiencia >
usuário | usuário*
conexões | array< Perfil >

> Entidades marcadas com * são entidades obrigatórias. As definições das mesmas estão abaixo

## Entidades Internas 

### Educacao

Atributo | Tipo
--- | ---
Instituicao| String,
ingresso| Date,
conclusão|  Date,
nivelEscolaridade| { Enum [*Ensino Fundamental*, *Ensino Médio*, *Ensino Superior*, *Pós Graduação*, *Mestrado*, *Doutorado* ],}
completo | boolean

### Certificação

Atributo | Tipo
---|---
instituição|String
titulo| String
cargaHoraria|Number

### Experiência

Atributo| Tipo
--- | ---
Instituicao| String
ingresso| Date
conclusão|  Date

### Usuário

Atributo| Tipo
--- | ---
email| String
senha| Date

### Notificação

Atributo| Tipo
--- | ---
tipo| Enum< Contato, Solicitação de Amizade >*
titulo| String*
descricao| String
lido| Boolean*
remetente| Perfil(ref)*
destinatario| Perfil(ref)*

# Endpoints

## Perfil 

Recurso | Método | Autenticado | Objetivo | Retorno
---|---|---|---|---
/perfil | GET | não |Útimos 5 perfis cadastrados | Lista de perfis JSON
/perfil/:id | GET | não | Busca um perfil por ID| perfil JSON
/perfil | POST | não | Cadastrar um perfil |Perfil JSON
/perfil | PUT | sim | Editar um perfil | Perfil JSON
/perfil/conexao | POST | sim | Conecta dois perfis (conexão/ amizade)| Mensagem JSON

## Login

Recurso | Método | Autenticado | Objetivo | Retorno
---|---|---|---|---
/login | POST | não |Efetuar autenticação do usuario | TOKEN, email e perfil

## Notificação

Recurso | Método | Autenticado | Objetivo | Retorno
---|---|---|---|---
/notificacao/:id | GET | sim |buscar uma notificação por ID | Notificação JSON
/notificacao/perfil/:id | GET | sim |buscar todas as notificações do perfil por ID | lista de notificações JSON
/notificacao | POST | sim |cadastrar uma nova notificação | notificação JSON
/notificacao/lida/:id | PUT | sim |Mostra que a notificação foi lida | lista de notificações JSON
