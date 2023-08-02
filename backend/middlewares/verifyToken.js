const jwt=require('jsonwebtoken')
exports.verifyToken=(req,res,next)=>{
// console.log(req.headers);
const token=req.headers.authorization;
jwt.verify(token,process.env.KEY,(err,valid)=>{
    if(err){
     return res.status(201).json({
        success:false,
        message:"Please provide valid key!!"
     })
    }
    next();
})

}