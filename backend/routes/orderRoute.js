const express=require('express');
const { verifyToken } = require('../middlewares/verifyToken');
const { createOrder } = require('../controllers/order.controller');
const router=express.Router();

//Route for Creating a Order
// router.route('/createOrder').post(verifyToken, createOrder);
 
module.exports=router;