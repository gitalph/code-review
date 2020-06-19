const express = require("express");
const path = require('path');
const NotFoundError = require("./helpers/errors.js");

const app = express();
const HTTP_PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const static = path.join(__dirname, 'public');
app.use(express.static(static));

app.use('/users/', require('./routes/users.js'));
app.use('/cards', require('./routes/cards.js'));

app.use(function(req, res, next) {
        next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
  });
});

app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`);
});
