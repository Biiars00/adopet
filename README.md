# AdoPets

> API de Adoção de Animais

Esta é uma **API de adoção de animais** desenvolvida em **Node.js/TypeScript**, com banco de dados **Firebase**. As rotas da API estão documentadas com o uso do Swagger.

## Documentação da API

A documentação completa da API pode ser encontrada em [Swagger UI](http://localhost:3001/api-docs/).

### 🪄 Endpoints

| Método | URL              | Descrição                                                       |
| ------ | ---------------- | --------------------------------------------------------------- |
| GET    | /pet             | Retorna a lista de pets disponíveis para adoção                 |
| POST   | /pet             | Adiciona um novo pet                                            |
| GET    | /pet/:id         | Retorna um pet por ID                                           |
| PUT    | /pet/:id         | Atualiza as informações de um pet existente                     |
| DELETE | /pet/:id         | Remove um pet existente                                         |
| GET    | /institution     | Obtém a lista de instituições cadastradas                       |
| POST   | /institution     | Adiciona uma nova instituição                                   |
| GET    | /institution/:id | Retorna informações de uma instituição com base no ID fornecido |
| PUT    | /institution/:id | Atualiza as informações de uma instituição existente            |
| DELETE | /institution/:id | Remove uma instituição existente                                |
| GET    | /adopter         | Obtém a lista de adotantes registrados                          |
| POST   | /adopter         | Adiciona um novo registro de adotante                           |
| GET    | /adopter/:id     | Retorna informações de um adotante com base no ID fornecido     |
| PUT    | /adopter/:id     | Atualiza as informações de um registro de adotante existente    |
| DELETE | /adopter/:id     | Remove um registro de adotante existente                        |
| POST   | /adoption/:id    | Adota um pet com base no ID fornecido                           |

### 🪄 Pré-requisitos

- Node.js
- Firebase (configurado com as credenciais corretas)

#### Configuração

- Clone o repositório.
- Instale as dependências usando `yarn add`.
- Configure as variáveis de ambiente necessárias.
- Inicie o servidor usando `yarn run dev`.

#### Execução

A API estará disponível em http://localhost:3001.

> No momento, disponível apenas em ambiente local.
