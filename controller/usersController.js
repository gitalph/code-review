// Надо исправить те же ошибки что в модуле cardsController
const usersData = require('../data/usersData.json');
const { mainHelper } = require('../helpers/mainHelper');

const paramFindOne = {
// Надо исправить текст ошибки в соответствии с заданием { “message”: “Нет пользователя с таким id” }
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
// Хорошо, что код не дублируется, но есть замечание по названию функций
// mainHelper ничего не говорящее название, лучше выбрать имя в соответствии с назначением этой функции
exports.allUsers = async (req, res, next) => mainHelper(paramFindAll, req, res, next);
