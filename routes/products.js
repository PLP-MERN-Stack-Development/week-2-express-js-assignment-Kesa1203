const express = require('express');
const router = express.Router();
const { getAllProducts, saveProducts, uuidv4 } = require('../models/productModel');
const { authenticate } = require('../middleware/auth');
const { validateProduct } = require('../middleware/validation');

let products = getAllProducts();

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

router.post('/', authenticate, validateProduct, (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  saveProducts(products);
  res.status(201).json(newProduct);
});

router.put('/:id', authenticate, validateProduct, (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });
  products[index] = { ...products[index], ...req.body };
  saveProducts(products);
  res.json(products[index]);
});

router.delete('/:id', authenticate, (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });
  const deleted = products.splice(index, 1);
  saveProducts(products);
  res.json(deleted[0]);
});

router.get('/', (req, res) => {
  let filteredProducts = products;

  // Filter by category (optional)
  if (req.query.category) {
    filteredProducts = products.filter(p => p.category === req.query.category);
  }

  // Pagination (optional)
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const start = (page - 1) * limit;
  const paginatedProducts = filteredProducts.slice(start, start + limit);

  res.json({
    page,
    limit,
    total: filteredProducts.length,
    data: paginatedProducts
  });
});


module.exports = router;
