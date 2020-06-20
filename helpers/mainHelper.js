const NotFoundError = require('./errors');

async function findOne(data, userId) {
  return data.find(({ _id: id }) => id === userId);
}

async function findAll(data) {
  return data;
}

// основной шаблон поиска для всех случаев
exports.mainHelper = async (params, req, res, next) => {
  try {
    const answer = params.all
      ? await findAll(params.data) : await findOne(params.data, req.params.id);
    if (!answer) {
      return next(new NotFoundError(params.message));
    }
    return res.json(answer);
  } catch (e) {
    return next(new Error('Ошибка сервера'));
  }
};
