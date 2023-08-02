const mongoose=require('mongoose');
const connectDatabase=(URL)=>{
mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
console.log("Database Connected!!")
}).catch((err)=>{
    console.log("Not Connected!!")
})
}
module.exports=connectDatabase