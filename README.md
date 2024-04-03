# CRUD para API de Petshop com ORM Sequelize e Winston

Este é um projeto do bootcamp que implementa um CRUD (Create, Read, Update, Delete) para uma API de Petshop. O projeto utiliza ORM Sequelize e o banco de dados PostgreSQL, hospedado no ElephantSQL e o logger Winston para registro de atividades.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes dependências instaladas em sua máquina:

- Node.js
- npm (Node Package Manager)
- PostgreSQL

## Instalação

1. Clone este repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Na pasta do projeto, instale as dependências do Node.js executando o seguinte comando:

```bash
npm install
```

## Configuração do Banco de Dados

Antes de iniciar o servidor, é necessário configurar o banco de dados PostgreSQL. Certifique-se de criar um banco de dados e configurar as credenciais de acesso no arquivo `config.js`.

## Uso

Para iniciar o servidor, execute o seguinte comando:

```bash
npm start
```

O servidor estará em execução na porta especificada no arquivo `config.js`.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte maneira:

```
.
├── controllers
│   ├── animais.controller.js
│   └── proprietarios.controller.js
├── models
│   ├── animais.model.js
│   └── proprietarios.model.js
├── repositories
│   ├── animalRepository.js
│   └── proprietarioRepository.js
├── routes
│   ├── animalRoutes.js
│   └── proprietarioRoutes.js
├── services
│   ├── animalService.js
│   └── proprietarioService.js
├── index.js
├── package.json
├── package-lock.json
└── petshop-log

```

- `controllers/`: Contém os controladores para manipulação de dados relacionados a animais e proprietários.
- `models/`: Contém os arquivos de definição dos modelos.
  - `animais.model.js`: Arquivo de definição do modelo de animais.
  - `proprietarios.model.js`: Arquivo de definição do modelo de proprietários.
- `repositories/`: Contém os arquivos relacionados ao acesso aos dados no banco de dados.
  - `animalRepository.js`: Repositório para manipulação de dados relacionados a animais.
  - `proprietarioRepository.js`: Repositório para manipulação de dados relacionados a proprietários.
  - `db.js`: Arquivo de configuração e inicialização da conexão com o banco de dados.
- `routes/`: Contém as definições de rotas da API relacionadas a animais e proprietários.
- `services/`: Contém os serviços responsáveis pela lógica de negócios relacionada a animais e proprietários.
- `index.js`: Arquivo principal que inicia o servidor.
- `package.json`: Arquivo que lista as dependências do projeto e outras configurações do npm.
- `package-lock.json`: Arquivo gerado automaticamente pelo npm para garantir a consistência das dependências.
- `petshop-log`: Arquivo de log do petshop, localizado na raiz do projeto.


