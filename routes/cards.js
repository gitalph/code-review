const express = require('express');

const router = express.Router();
const cards = require('../controller/cards');

router.get('/', cards.all);

// этот не обязательный
router.get('/:id', cards.find);

module.exports = router;
