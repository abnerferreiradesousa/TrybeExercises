const express = require('express');
const bodyParser = require('body-parser');
const userModel = require('./models/user')
const PORT = 3000;

const app = express();

app.use(bodyParser.json())

app.post('/user', (req, res) => {
  const result = userModel.isValid(req.body)
  if (result) return res.status(400).json(result);
  userModel.create(req.body);
  res.status(200).json({ message: 'Deu certo' })
})

app.listen(PORT, console.log('online'))