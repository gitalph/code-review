const express = require('express');
const users = require('../controller/usersController');

const usersRouter = express.Router();
// Отлично - логика работы маршрутов вынесена в отдельные файлы, а в routes просто подключаются функции
usersRouter.get('/', users.allUsers);
usersRouter.get('/:id', users.findUser);

module.exports = usersRouter;
