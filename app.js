const express = require("express");

const router = require('./src/router.js');

const app = express();
const HTTP_PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router);

app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`);
});
