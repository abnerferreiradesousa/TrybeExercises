// const express = require('express');

// const app = express(); // 1

// app.get('/hello', handleHelloWorldRequest); // 2

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3

// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Hello World!'); // 4
// }

// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World, Abner, seu lindo! Lindo demais');
// });

// app.listen(3000, () => console.log('Aplicaçao rodando na porta 3000'))

////////////////////////////////////////////////////////////////////////////////////////////////////

/* index.js */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

//...

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinksIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinksIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  drinks[drinksIndex] = { ...recipes[drinksIndex], name, price };

  res.status(204).end();
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});
// ...

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});

// ...

app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price});
  res.status(201).json({ message: 'Drink created successfully!'});
});

// http POST :3000/recipes id:=4 name='Macarrão com Frango' price:=30  
app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

// http://localhost:3001/recipes/search?name=Macarrão
app.get('/recipes/search', function (req, res) {
  const { name } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  res.status(200).json(filteredRecipes);
});

// http :3000/drinks/search name==Suco
app.get('/drinks/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name));
  res.status(200).json(filteredDrinks);
});

// http://localhost:3001/recipes/search?name=Macarrão&maxPrice=40
app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes
    .filter((r) => r.name.includes(name) && r.price <= parseInt(maxPrice) && r.price >= parseInt(minPrice));
  res.status(200).json(filteredRecipes);
})

app.get('/recipes', function (req, res) {
  const orderedRecipes = recipes.sort((a, b) => a.name > b.name);
  res.json(orderedRecipes);
});

app.get('/drinks', (req, res) => {
  const orderedDrinks = drinks.sort((a, b) => a.name > b.name);
  res.json(orderedDrinks);
})

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(drink);
});

app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000');
})
