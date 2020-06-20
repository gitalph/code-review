const usersData = require('../data/usersData.json');
const { mainHelper } = require('../helpers/mainHelper');

const paramFindOne = {
  message: 'Нет пользователей с таким ID',
  data: usersData,
  all: false,
};

const paramFindAll = {
  message: 'Пользователей не найдено',
  data: usersData,
  all: true,
};

exports.findUser = async (req, res, next) => mainHelper(paramFindOne, req, res, next);
exports.allUsers = async (req, res, next) => mainHelper(paramFindAll, req, res, next);
