const express = require('express');

const router = express.Router();
const cards = require('../controller/cards');

router.get('/', cards.all);
router.get('/:id', cards.find);

module.exports = router;
