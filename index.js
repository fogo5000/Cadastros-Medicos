const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const app = express();
const PORT = 3000

app.use(bodyParser.json());

app.use('/cadastro', controllers.cadastro);

app.listen(PORT, () => console.log(`Hey, listen! ${PORT}`));