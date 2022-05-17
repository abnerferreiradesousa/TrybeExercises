const BooksService = require('../services/BooksService')

const getAll = async (req, res) => {
  const books = await BooksService.getAll();
  res.status(200).json(books);
}

const getById = async (req, res) => {
  const {id } = req.params;
  const book = await BooksService.getById(id);
  res.status(200).json(book);
}

const create = async (req, res) => {
    const {title, author, pageQuantity } = req.body;
    const book = await BooksService.create(title, author, pageQuantity);
    res.status(200).json(book);
}

const update = async (req, res) => {
  const {id } = req.params;
  const {title, author, pageQuantity } = req.body;
  const book = await BooksService.update(title, author, pageQuantity, id);
  res.status(200).json(book);
}

const remove = async (req, res) => {
  const {id } = req.params;
  const book = await BooksService.remove(id);
  res.status(200).json(book);
}

const getByAuthor = async (req, res) => {
  const {author } = req.body;
  const book = await BooksService.getByAuthor(author);
  res.status(200).json(book);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor
}