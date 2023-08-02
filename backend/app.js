const express=require("express");
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//Route Imports
const user=require('./routes/userRoutes');
app.use('/users',user);
module.exports=app;