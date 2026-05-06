const express = require('express');
const { createProduct, getAllProducts, updateProduct, deleteProduct } = require('../controllers/productController');


const router = express.Router();

//products route

//let's add a route to create products
router.post('/products',createProduct)
router.get('/products', getAllProducts)
router.patch('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)



module.exports = router;
