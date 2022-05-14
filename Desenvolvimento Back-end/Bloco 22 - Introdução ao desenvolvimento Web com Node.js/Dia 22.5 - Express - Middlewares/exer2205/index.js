const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const axios = require('axios').default;
const app = express();
const Joi = require('joi');


const schema = Joi.object({
  token: Joi.number()
})

// MIDDLEWARES
function validUserName(req, res, next) {
  const { username } = req.body;
  const validing = username.length > 3;
  if(!validing) return res.status(400).json({ "status": 400, "message": 'Invalid data'})
  next();
}

function validEmail(req, res, next) {
  const { email } = req.body;
  const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  const validing = emailRegex.test(email);
  if(!validing) return res.status(400).json({ "status": 400, "message": 'Invalid data'})
  next();
}

function validPassword(req, res, next) {
  const { password } = req.body;
  const validing = password.length >= 4 && password.length <= 8;
  if(!validing) return res.status(400).json({ "status": 400, "message": 'Invalid data'})
  next();
}

function validToken(req, res, next) {
  const { authorization } = req.headers;
  const validMinCharacters = authorization.length === 12;
  const { error, value } = schema.validate({ token: authorization });
  console.log(value, error);
  if(!validMinCharacters) return res.status(401).json({ "message": "Invalid token"})
  next();
}

// function validId(req, res, next) {
//   const { id } = req.params;
//   if(!id) return res.status(404).json({ "message": "Need to pass id"})
//   next();
// }

// NON-MIDDLEWARE
const generateToken = () => {
  const createdToken = [];
  const numbers = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(let i = 0; i < 12; i++) {
    const index = Math.floor(Math.random() * 62);
    createdToken.push(numbers[index]);
  }
  return createdToken.join('');
} 

const getCurrencyFromAPI = async () => {
  const { data } = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  return data;
}

const posts = [
  {id: 1, name: 'Carlos', post: 'Reunião com os amigos'},
  {id: 2, name: 'Bruna', post: 'Comendo Pizza'},
  {id: 3, name: 'Laura', post: 'Passandinha em Paris'}
];

const teams = [];

const getPostById = (req, res, next) => {
  const { id } = req.params;
  const filteredPost = posts.filter((post) => post.id === parseInt(id));
  if (!(filteredPost.length > 0)) return res.status(404).json({"message": "Post Not Found"})
  req.post = filteredPost;
  next();
};


const name = (req, res, next) => {
  const { name } = req.body;
  if(!(name.length > 5)) return res.status(404).json({"message": "invalid data"})
  next();
}

const initials = (req, res, next) => {
  const { initials } = req.body;
  if(!(initials.length <= 3)) return res.status(404).json({"message": "invalid data"})
  next();
}

const country = (req, res, next) => {
  const { country } = req.body;
  if(!(country.length > 3)) return res.status(404).json({"message": "invalid data"})
  next();
}

const write = (req, res, next) => {
  const { league, country, name, initials } = req.body;
  const data = `${name}\n${country}\n${initials}\n${league}\n\n`;
  fs.appendFileSync('./newTeam', data);
  next();
}
 
app.use(bodyParser.json());

// ==================ATIVIDADE 4 - E2

app.get('teams', (req, res) => {
  return res.status(200).json({ teams,})
})


// ==================ATIVIDADE 4 - E1

app.post('/teams', name, initials, country, write, (req, res) => {
  const { league, country, name, initials } = req.body;
  teams.push({ league, country, name, initials });
  console.log(teams);
  return res.status(200).json({"message": {
    league, country, name, initials,
  }})
})


// ==================ATIVIDADE 3 - E2

app.get('/posts', (req, res) => {
  res.status(200).json({ posts, });
})

// ==================ATIVIDADE 3 - E1

app.get('/posts/:id', getPostById, (req, res) => {
  const { post } = req;
  res.status(200).json({ post, })
})

// ==================ATIVIDADE 2 - E1

app.get('/btc/price', validToken, async (req, res) => {
  const requestCurrency = await getCurrencyFromAPI();
  return res.status(200).json({ "message": requestCurrency });
})

// ==================ATIVIDADE 1 - E2

app.post('/user/login', validEmail, validPassword, (req, res) => {
  const token = generateToken();
  return res.status(200).json({ "token": token })
});

// ==================ATIVIDADE 1 - E1

// ROTAS
app.post('/user/register', validUserName, validEmail, validPassword, (req, res) => {
  return res.status(201).json({ "message": 'user created' })
});

// MIDDLEWARE DE ERRO

// Middlewares de erro sempre devem vir depois de rotas e outros middlewares ;

// function errMiddleware(err, _req, res, _next) {
//   if (err) {
//     return res.status(err.status).json({ "message": err.message});
//   }
//   return res.status(500).json({ "status": 500, "message": 'Internal Server Error'})
// }

// app.use('*', (err, req, res, next) => {
//   res.status(404).json({"message": "Ops, route not found"})
// });

app.listen('3000', () => console.log('Olá, da porta 3000'));