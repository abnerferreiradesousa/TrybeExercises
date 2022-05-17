const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  },
  {
    underscore: true,
    tableName: 'Book',
  })

  return Book;
}

module.exports = Book;