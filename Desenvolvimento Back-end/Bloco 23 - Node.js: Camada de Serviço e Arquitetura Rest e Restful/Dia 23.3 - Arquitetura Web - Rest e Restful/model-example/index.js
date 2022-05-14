// index.js

const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');

const app = express();
app.use(bodyParser.json());

app.post('/books', async (req, res) => {
  const { title, author_id} = req.body;
  if(Author.isValidData(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' })
  }

  await Author.createBook(title, author_id);
  res.status(201).json({ message: 'Livro criado com sucesso! '});
})

app.post('/authors', async (req, res) => {
  const { first_name, last_name, middle_name } = req.body;
  if (!Author.isValid(first_name, last_name, middle_name)) return res.status(400).json({ message: 'dados invalidos' })
 
  await Author.create(first_name, last_name, middle_name);

  res.status(201).json({ message: 'author cadastrado com sucesso' })
})

app.get('/authors/:id', async (req, res) => {
  const {id} = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(200).json({message: 'Not found'});
  res.status(200).json(author)
})

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Author.getAllBooks(id);
  res.status(200).json(book);
})

app.get('/books/', async (req, res) => {
  const book = await Author.getAllBooks2();
  res.status(200).json(book);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});