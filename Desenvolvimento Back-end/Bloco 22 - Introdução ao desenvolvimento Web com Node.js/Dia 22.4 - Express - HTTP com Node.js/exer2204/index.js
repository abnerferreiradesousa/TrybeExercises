const express = require('express');
const bodyParser = require('body-parser');
const simpsons = require('./simpsons.json');

const app = express();
app.use(bodyParser.json());

const response = { message: 'pong' };
const users = [];

app.post('/simpsons', function (req, res) {
  // const { id } = req.params;
  const { name } = req.body;

  const getSimp = simpsons.filter((s) => {
    s.name === name;
  })
  console.log(getSimp, name);

  if(getSimp.length > 0) return res.status(409).json({ message: 'id already exists' })

  res.status(204);
});

// app.get('/simpsons/:i  d', function (req, res) {
//   const { id } = req.params;
//   const simpson = simpsons.find((r) => r.id === parseInt(id));

//   if (!simpson) return res.status(404).json({ message: 'simpson not found!'});

//   res.status(200).json(simpson);
// });

app.get('/simpsons', (req, res) => {
  res.json(simpsons);
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
})

app.post('/greetings', function (req, res) {
  const { name, age } = req.body;

  if(age > 17) return res.status(200).json({ message: `Hello, ${name}!` })

  res.status(401).json({ message: "Unauthorized" });
});

app.get('/ping', function (req, res) {
  res.json(response);
});

app.get('/hello', function (req, res) {
  res.json(users);
});

app.post('/hello', function (req, res) {
  const { name } = req.body;
  users.push({ name });
  res.status(201).json({ message: `Hello, ${name}!` });
});

app.listen(3000);