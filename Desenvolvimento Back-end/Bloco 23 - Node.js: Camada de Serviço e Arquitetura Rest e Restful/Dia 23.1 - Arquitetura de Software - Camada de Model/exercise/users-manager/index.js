const express = require('express')
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');

const app = express()
const port = 3000;

app.use(bodyParser.json());

app.post('/user', middlewares.createUser);

app.get('/', (req, res) => res.send('Hello World!'));

app.use(middlewares.error);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));