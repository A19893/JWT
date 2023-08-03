const Product=require("../models/productModel");
const amqp=require('amqplib')
var channel,connection;

async function connect(){
const amqpServer="amqp://localhost:5672";
connection=await amqp.connect(amqpServer);
channel=await connection.createChannel();
await channel.assertQueue("PRODUCT")
} 
connect();
exports.createProduct=(req,res)=>{
        console.log(req.body)
        Product.create(req.body).then((result)=>{
            return res.status(201).json({
                message:"Product Created Successfully!!",
                result
            }) 
        }).catch((err)=>{
      console.log(err);
      return res.status(403).json({
        message:"Please Fill All Details Correctly"
      })
    }) 
}

exports.buyProduct=async(req,res)=>{
     const OneProduct=await Product.findById(req.params.id);
     channel.sendToQueue(
        "ORDER",
        Buffer.from(
         JSON.stringify({
            OneProduct
         })
        )
     )
     channel.consume("PRODUCT",(data)=>{
      console.log("Consumed by product queue")
      const response=JSON.parse(data.content);
      // console.log("product",response);
      channel.ack(data);
     })
     return res.status(201).json({
      success:true,
      message:"Order Done"
    })
}
