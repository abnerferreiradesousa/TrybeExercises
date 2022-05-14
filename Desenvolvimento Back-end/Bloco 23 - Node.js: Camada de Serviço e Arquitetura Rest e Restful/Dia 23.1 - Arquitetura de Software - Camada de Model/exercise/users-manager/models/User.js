const connection = require('./connection');

const formatUser = ({ id, first_name: firstName, last_name: lastName, email }) => ({
  id, first_name: firstName, last_name: lastName, email
})

const create = async ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  const [users] = await connection.execute(query, [firstName, lastName, email, password]);
  return users;
}

module.exports = {
  formatUser,
  create,
}