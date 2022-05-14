const express = require('express');
const ProductModel = require('../models/productModel');
const ProductServices = require('../services/productServices');

const router = express.Router();

// list all
router.get('', async (req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

// get by id
router.get('/:id', async (req, res) => {
  const product = await ProductServices.getByIdValidate(req.params.id);
  res.status(200).json(product);
});

// add-product
router.post('', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductServices.add(name, brand);

  res.status(201).json(newProduct);
});

// delete by id
router.delete('/:id', async (req, res) => {
  const products = await ProductServices.deleteByIdValidate(req.params.id);

  res.status(200).json(products);
});

// update by id
router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const updatedProduct = await ProductServices.update(name, brand);


  res.status(204).json({ message: 'Updated success' });
});

module.exports = router;