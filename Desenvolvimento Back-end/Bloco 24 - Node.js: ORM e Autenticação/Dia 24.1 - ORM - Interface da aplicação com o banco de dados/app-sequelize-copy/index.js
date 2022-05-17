const { Store } = require('./src/models')
const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => {
  Store.findAll().then((dados) => {
    return res.status(201).json(dados)
  }).catch((err) => {
    console.log(err);
    return res.status(500).json({message: 'Algo deu errado'})
  });
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))