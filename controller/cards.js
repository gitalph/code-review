const cardsData = require('../data/cards');
const { template } = require('../helpers/helpers');

const paramOne = {
  message: 'Нет карточек с таким ID',
  data: cardsData,
  all: false,
};

const paramAll = {
  message: 'Карточек не найдено',
  data: cardsData,
  all: true,
};

exports.find = async (req, res, next) => template(paramOne, req, res, next);
exports.all = async (req, res, next) => template(paramAll, req, res, next);
