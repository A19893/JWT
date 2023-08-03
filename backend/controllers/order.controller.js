const Order=require("../models/orderModel");
const amqp=require('amqplib')
var channel,connection;

async function connect(){
const amqpServer="amqp://localhost:5672";
connection=await amqp.connect(amqpServer);
channel=await connection.createChannel();
await channel.assertQueue("ORDER")
} 
connect().then(()=>{
channel.consume("ORDER",(data)=>{
    console.log("Consuming order queue");
    const order=JSON.parse(data.content);
    channel.ack(data);
   createOrder(order).then((result)=>{
    channel.sendToQueue("PRODUCT",
    Buffer.from(
        JSON.stringify({
            result
        })
    ))
   }).catch((err)=>{
    console.log(err)
   })
})
});

async function createOrder(order){
    const newOrder=Order.create(order.OneProduct); 
    return newOrder;
}

