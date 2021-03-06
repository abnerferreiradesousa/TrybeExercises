const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

// ==============Criando middlewares globais com app.use=================
// http GET :3001/open 
// http GET :3001/recipes


// ===PASSANDO INFORMAÇÕES PELO HEADERS
// http GET :3001/recipes username:MestreCuca password:MinhaSenhaSuperSeguraSqn # listar receitas
// ===PASSANDO INFORMAÇÕES PELO HEADERS E BODY
// http POST :3001/recipes username:MestreCuca password:MinhaSenhaSuperSeguraSqn name=Churrasco id:=5 price:=30 # cadastrar um novo receita
// http PUT :3001/recipes/2 username:MestreCuca password:MinhaSenhaSuperSeguraSqn name=Lasanha price:=45 # editar um receita

// Para enviar parâmetros no header de uma requisição, utiliza-se o formato <chave>:<valor> enquanto
// no body da requisicão usa-se <chave>=<valor> ou <chave>:=<valor></valor>

app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);

// ==========================FIM==============================

// ==========================Middlewares============================

// ROTA COM DOIS MIDDLEWARES

// # Essa requisição vai retornar { message: 'Invalid data!'}
// http POST :3001/recipes price:=40
// # Experimente chamar essa request com o código correto, e depois 
// comentando o next. A requisição não vai retornar uma resposta.
// http POST :3001/recipes name=Macarronada price:=40

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next();
};

function validatePrice(req, res, next) {
  const { price } = req.body;
  if (!price || typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Invalid data!'});
  }
  next();
};

app.post('/recipes', validateName , validatePrice, function (req, res) { // 3
  const { id, name, price } = req.body;
  const { username } = req.user; // Aqui estamos acessando o usuário encontrado no middleware de autenticação.
  recipes.push({ id, name, price, chef: username });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validateName, validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipesIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});

// ==========================FIM==============================


app.get('/recipes', function (req, res) {
  res.status(200).json(recipes);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});