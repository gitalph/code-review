const usersData = require('../data/users.json');
const { findOne, findAll } = require('../helpers/helpers');
const NotFoundError = require('../helpers/errors');

exports.all = async (req, res) => {
  const answer = await findAll(usersData);
  return res.json(answer);
};

exports.find = async (req, res, next) => {
  const answer = await findOne(req.params.id, usersData);
  if (!answer) {
    return next(new NotFoundError('Нет пользователя с таким ID'));
  }
  return res.json(answer);
};
