const connection = require("./connection");

const isValid = ({ firstName, lastName, email, password }) => {
  const passwordErrorMessage =  {
    "error": true,
    "message": "O campo 'password' deve ter pelo menos 6 caracteres"
  }
  const errorMessage = {
    "error": true,
    "message": "Invalid data"
  }
  if (!firstName) return errorMessage;
  if (!lastName) return errorMessage;
  if (!email) return errorMessage;
  if (!password || password.length < 6) return passwordErrorMessage;

  return false;
}

const create = async ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)'
  await connection.execute(query, [firstName, lastName, email, password])
}

module.exports = {
  isValid,
  create,
}