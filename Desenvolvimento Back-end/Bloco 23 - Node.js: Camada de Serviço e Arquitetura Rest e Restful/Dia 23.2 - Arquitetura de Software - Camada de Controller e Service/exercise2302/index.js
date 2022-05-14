const express = require('express')
const cepController = require('./controllers/cepController');
const app = express()
const port = 3000

app.get('/ping', (req, res) => res.status(201).json({ message: "pong!" }))
app.get('/cep/:cep', cepController.cepHandle)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))