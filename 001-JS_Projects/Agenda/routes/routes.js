const express = require('express');
const controller = require('../src/controllers/controller');
const loginController = require('../src/controllers/loginController');
const contatoController = require('../src/controllers/contatoController');

const { loginRequired } = require('../src/middlewares/middleware')
let route = express.Router(); 

route.get("/", controller.index);

// Rotas de Login
route.get("/login/", loginController.index);
route.post("/login/register", loginController.register);
route.post("/login/login", loginController.login);
route.get("/login/logout", loginController.logout);

// Rotas de contato
route.get("/contato/", loginRequired, contatoController.index);
route.post("/contato/register", loginRequired, contatoController.register);
route.get("/contato/:id", loginRequired, contatoController.editIndex);
route.post("/contato/edit/:id", loginRequired, contatoController.edit);
route.get("/contato/delete/:id", loginRequired, contatoController.delete);

module.exports = route;