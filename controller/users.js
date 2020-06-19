const usersData = require('../data/users');
const { template } = require('../helpers/helpers');

const paramOne = {
  message: 'Нет пользователей с таким ID',
  data: usersData,
  all: false,
};

const paramAll = {
  message: 'Пользователей не найдено',
  data: usersData,
  all: true,
};

exports.find = async (req, res, next) => template(paramOne, req, res, next);
exports.all = async (req, res, next) => template(paramAll, req, res, next);
