const  connection = require('./connection');

const getNewAuthor = ({ id, firstName, lastName, middleName }) => {
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');
  return { 
    id, firstName, lastName, middleName, fullName
  }
}

const serialize = ({id, first_name, last_name, middle_name, author_id, title}) => ({
  id: id,
  firstName: first_name,
  lastName: last_name,
  middleName: middle_name,
  authorId: author_id,
  title,
});

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, last_name, middle_name FROM model_example.authors;',
  );
  return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const query = 'SELECT id, first_name, last_name, middle_name FROM model_example.authors WHERE id = ?';
  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  const { firstName, lastName, middleName } = authorData.map(serialize)[0];

  return  getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  })
}

const isValid = (firstName, lastName, middleName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
}

const isValidData = (title, author_id) => {
  if (!title || title.length >= 3) return false;
  if (!author_id) return false;
  return true;
}

const createBook = async (title, author_id) => {
  connection.execute(
    'INSERT INTO model_example.authors (title, author_id) VALUES (?, ?)',
    [title, author_id]
  )
}

const create = async (firstName, lastName, middleName) => {
  connection.execute(
    'INSERT INTO model_example.authors (first_name, last_name, middle_name) VALUES (?, ?, ?)',
    [firstName, lastName, middleName]
  )
}

const getAllBooks = async (id) => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books WHERE author_id = ?', [id]
  );
  if (books.length === 0) return null;

  return books.map(serialize);
}

const getAllBooks2 = async (id) => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books'
  );
  if (books.length === 0) return null;

  return books.map(serialize);
}

module.exports = {
  getAll,
  getAllBooks,
  findById,
  isValid,
  create,
  isValidData,
  createBook,
  getAllBooks2,
}