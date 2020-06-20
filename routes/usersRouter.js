const express = require('express');
const users = require('../controller/usersController');

const usersRouter = express.Router();

usersRouter.get('/', users.allUsers);
usersRouter.get('/:id', users.findUser);

module.exports = usersRouter;
