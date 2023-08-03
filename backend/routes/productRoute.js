const express=require('express');
const { createProduct, buyProduct } = require('../controllers/productController');
const { verifyToken } = require('../middlewares/verifyToken');
const router=express.Router();

//Route for Creating a Product
router.route('/createProduct').post(verifyToken, createProduct);
 
//Route for Buying a product
router.route('/buyProduct/:id').get(verifyToken,buyProduct)
module.exports=router;