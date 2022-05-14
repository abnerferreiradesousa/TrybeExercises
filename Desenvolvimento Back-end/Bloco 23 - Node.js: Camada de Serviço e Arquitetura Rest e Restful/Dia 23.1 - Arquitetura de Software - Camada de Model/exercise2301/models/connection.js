const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  database: 'users_crud',
  password: '1234',
  host: 'localhost',
})

module.exports = connection;