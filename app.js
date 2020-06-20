const express = require('express');
const path = require('path');
const NotFoundError = require('./helpers/errors.js');
const usersRouter = require('./routes/usersRouter.js');
const cardsRouter = require('./routes/cardsRouter.js');

const app = express();
const HTTP_PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// статика
const pages = path.join(__dirname, 'public');
app.use(express.static(pages));

// маршруты
app.use('/users/', usersRouter);
app.use('/cards/', cardsRouter);

// общая ошибка адреса, ошибка ID передается из контроллера в следующий блок
app.use((req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

// обработчик ошибок по умолчанию
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
  });
});

app.listen(HTTP_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${HTTP_PORT}`);
});
