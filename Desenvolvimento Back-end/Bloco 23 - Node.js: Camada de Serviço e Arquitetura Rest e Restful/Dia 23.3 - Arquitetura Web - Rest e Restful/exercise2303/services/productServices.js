const ProductModel = require('../models/productModel');

const validateType = (type, value) => typeof value === type;

const add = async (name, brand) => {
  if (!validateType('string', name)) return { code: 400, message: 'Invalid name'}
  if (!validateType('string', brand)) return { code: 400, message: 'Invalid brand'}
  const newProduct = await ProductModel.add(name, brand);

  return newProduct;
}

const update = async (name, brand) => {
  if (!validateType('string', name)) return { code: 400, message: 'Invalid name'}
  if (!validateType('string', brand)) return { code: 400, message: 'Invalid brand'}
  const newProduct = await ProductModel.update(name, brand);

  return newProduct;
}

const getByIdValidate = async (id) => {
  const product = await ProductModel.getById(id);

  return product;
}

const deleteByIdValidate = async (id) => {
  const product = await ProductModel.exclude(id);

  return product;
}

module.exports = {
  add,
  update,
  getByIdValidate,
  deleteByIdValidate,
}