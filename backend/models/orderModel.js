const mongoose=require('mongoose');

const OrderSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    description:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model("Orders",OrderSchema)