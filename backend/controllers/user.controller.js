const User=require("../models/userModel");
const jwt=require('jsonwebtoken');
require('dotenv').config();
exports.registerUser=async(req,res)=>{
    console.log(req.body);
    await User.findOne({email:req.body.email}).then(async(result)=>{
        console.log("result mila",result);
        if(result){
            if(result.email===req.body.email){
                return  res.status(203).json({
                    success:false,
                    message:"Email already exists",
                    result
                 });
            }
        }
        else{
            const creation=await User.create(req.body);
            jwt.sign({creation},process.env.KEY,{expiresIn:"24h"},(err,token)=>{
                if(err){
                    return  res.status(401).json({
                        success:false,
                        message:"Something went wrong!!"
                       })  
                }
                return  res.status(201).json({
                    success:true,
                    message:"User Created",
                    creation,
                    auth:token
                   })
            })
        }
    }).catch((err)=>{
        console.log(err);
    })
}

exports.checkUser=async(req,res)=>{
    await User.findOne({ email: req.body.email }).then((result)=>{
        console.log(result);
        if(result==null){
            return res.status(200).json({
                success:false,
                message:"User not Found"
            })
        }
        else{
            if(result.password===req.body.password){
                jwt.sign({result},process.env.KEY,{expiresIn:"24h"},(err,token)=>{
                    if(err){
                        return  res.status(401).json({
                            success:false,
                            message:"Something went wrong!!"
                           })  
                    }
                    return   res.status(201).json({
                        success:true,
                        message:"User Found",
                        result,
                        auth:token
                       })
                })
          }
        else{
            return   res.status(203).json({
                success:true,
                message:"Username or Password Incorrect"
               })
        }
        }
    }).catch(err=>{
        console.log(err);
    });
}

exports.checkSession=async(req,res)=>{
return res.status(203).json({
    success:true,
    message:"User is already logged in"
})
}