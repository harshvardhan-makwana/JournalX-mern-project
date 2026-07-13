const User= require("../models/user");
const jwt=require("jsonwebtoken");

//generate jwt token
const generateToken=(id)=>{
return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"7d"})
}
//@route POST /api/auth/register
const registerUser=async (req,res) => {
    try{
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"please add all fields"})
        }
        const userExists=await User.findOne({email})
        if(userExists){
            return res.status(400).json({message:"user allready exists"})
        }
        const user=await User.create({name,email,password})
        if(user){
            res.status(201).json({
                _id:user.id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id)
           })
        }else{
            res.status(400).json({message:"Invalid user data"})
        }
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const loginUser=async(req,res)=>{
    try{
        
        const {email,password}=req.body;
        const user=await User.findOne({email})
        if(user && (await user.matchPassword(password))){
            res.json({
                _id:user.id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id)
            })
        }else{
            res.status(401).json({message:"Invalid email and password"})
        }
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
    
}
module.exports={registerUser,loginUser}