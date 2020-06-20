const cardsData = require('../data/cardsData.json');
const { mainHelper } = require('../helpers/mainHelper');

const paramFindOne = {
  message: 'Нет карточек с таким ID',
  data: cardsData,
  all: false,
};

const paramFindAll = {
  message: 'Карточек не найдено',
  data: cardsData,
  all: true,
};

exports.findCard = async (req, res, next) => mainHelper(paramFindOne, req, res, next);
exports.allCards = async (req, res, next) => mainHelper(paramFindAll, req, res, next);
