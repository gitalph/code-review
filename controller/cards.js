const cardsData = require('../data/cards.json');
const { findOne, findAll } = require('../helpers/helpers');
const NotFoundError = require('../helpers/errors');

exports.all = async (req, res) => {
  const answer = await findAll(cardsData);
  return res.json(answer);
};

exports.find = async (req, res, next) => {
  const answer = await findOne(req.params.id, cardsData);
  if (!answer) {
    return next(new NotFoundError('Нет карточки с таким ID'));
  }
  return res.json(answer);
};
