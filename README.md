<h1 align="center"> 

![Logo](https://static.wixstatic.com/media/af86ec_5850213055aa4ae8a4ecd4195d65d08d~mv2.png/v1/fill/w_154,h_22,al_c,q_85,usm_0.66_1.00_0.01/logo.webp) </h1>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#pré-requisitos">Pré-Requisitos</a> • 
 <a href="#rodando-o-back-end-servidor">Rodando Backend</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#demonstração-da-aplicação">Demonstração</a> • 
<a href="#testes-unitários">Testes</a> • 
<a href="#autoria">Autoria</a>
</p>

<h1 align="center">Tattoo Studio - API Rest</h1>

### Sobre

Criação de API que retorna informações sobre os `materiais` de um estúdio de tatuagem, utilizando os verbos HTTP seguindo o padrão REST e contendo todas as operações de CRUD.

---
### Pré-requisitos 

Antes de começar, você precisa ter instalado em sua máquina as seguintes ferramentas:

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

---
### Rodando o Back End (servidor) 

```bash
# Clone este repositório
$ git clone <https://github.com/cardosovanessa/tattoo-studio>

# Acesse a pasta do projeto no terminal/cmd
$ cd tattoostudio

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

---
### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

*Bibliotecas*
- [Nodemon](https://nodemon.io/)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Cors](https://www.npmjs.com/package/cors)

*Framework* 
- [Express](https://expressjs.com/pt-br/)

*Banco de dados*
- [SQLite3](https://www.npmjs.com/package/sqlite3)

---
### Demonstração da aplicação

O protocolo HTTP implementa diferentes verbos. A ideia por trás de uma API ou aplicação Rest é que **cada um dos diferentes verbos seja utilizado para uma operação específica.**

ex: *cada operação CRUD utilizará um verbo http diferente*
```sh

Em uma API Rest o verbo "post" é utilizado para inserir recursos/registros no banco de dados da aplicação. A operação CRUD equivalente é a de "create".

O verbo "get" é utilizado para retornar os recursos. A operação CRUD equivalente é a de "read".

O verbo "put" é utilizado para atualizar recursos/registros específicos no banco de dados da aplicação. A operação CRUD equivalente é a de "update".

O verbo "delete" é utilizado para receber um parâmetro para deleção. A operação CRUD equivalente é a de "delete".
```

### Retornando os materiais: *get: url/materials*
![post]()



### Testes Unitários

O arquivo de testes foi implementado ao projeto para conferir o funcionamento das rotas através da biblioteca [Supertest](https://www.npmjs.com/package/supertest) com o Framework [Jest](https://jestjs.io/).
Para utilizar o Jest, precisamos **instalá-lo como dependência de desenvolvimento** do projeto e configurar o script `test` no package.json para `jest`.

Utilizei a extensão do VSCode `ThunderClient` para rodar os testes, você pode optar pela mesma ou instalar outra ferramenta semelhante como o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

Obs: as tabelas não estão *populadas*, para realizar os testes você deverá inserir as informações através da rota **Post**.

Para executar os testes basta rodar no terminal os seguintes comandos: 
```sh
  $ npm run dev # iniciando o nodemon em modo desenvolvedor
  $ npm start 
  $ npm run test # iniciando testes
```
---
### Autoria

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/cardosofvanessa/)](https://www.linkedin.com/in/cardosofvanessa/) 
[![Gmail Badge](https://img.shields.io/badge/-Gmail-red?style=flat-square&logo=Gmail&logoColor=white&link=mailto:cardosovanessafs@gmail.com)](mailto:cardosovanessafs@gmail.com) 
[![Instagram Badge](https://img.shields.io/badge/-Instagram-violet?style=flat-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/vcardoso_/)](https://www.instagram.com/vcardoso_/)

<p>Feito com ❤️ por Vanessa Cardoso!</p>

