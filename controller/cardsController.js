// Надо исправить:
// в ответ на запрос GET localhost:3000/cards сервер вернёт JSON из файла cards.json;
// для получения путей к файлам с данными использовать модуль path
// нет обработки ошибок, которые могут возникнуть при чтении файлов
// например при отсутствующем файле приложение просто не запуститься с ошибкой Cannot find module
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
