const app=require('./app')
require('dotenv').config();
const connectDatabase=require('./connecion/mongoConnect')
const URL=process.env.URL;
const PORT=process.env.PORT
connectDatabase(URL);
app.listen(PORT,function(err){
    if(err)
    console.log(err);
    console.log("Server listening on port 5000!!")
})