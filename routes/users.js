const express = require('express');

const router = express.Router();
const users = require('../controller/users');

router.get('/', users.all);
router.get('/:id', users.find);

module.exports = router;
