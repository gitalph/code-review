const express = require('express');
const cards = require('../controller/cardsController');

const cardsRouter = express.Router();

cardsRouter.get('/', cards.allCards);

// этот не обязательный
cardsRouter.get('/:id', cards.findCard);

module.exports = cardsRouter;
