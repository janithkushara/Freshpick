const user=require("../models/user");
const bcrypt=require("bcryptjs");
const generateToken=require("../utils/generateToken");
const { token } = require("morgan");

//user register
exports.signupbutton=async(req,res)=>{
    try{
        const{firstName,lastName,email,password}=req.body;

       const userExists= await user.findOne({email});
       if(userExists){
        return res.status(400).json({message:"user already exists"});
       }
       const hashedPassword = await bcrypt.hash(password, 10);

       const newuser= await user.create({
        firstName,
        lastName,
        email,
        password:hashedPassword,
       });
       res.status(201).json({
        id:newuser._id,
        firstName:newuser.firstName,
        lastName:newuser.lastName,
        email:newuser.email,
        token:generateToken(newuser._id),
       });
    }catch(error){
        res.status(500).json({message:error.message});
    }
};
//login user
exports.signinbutton = async(req,res)=>{
    try{
        const{email,password}=req.body;

        const finduser=await user.findOne({email});
        if(!finduser){
            return res.status(401).json({message:"invalid credentials"});
        }
        const isMatch=await bcrypt.compare(password,finduser.password);
        if(!isMatch){
            return res.status(401).json({message:"invalid credentials"});
        }
        res.json({
            id:finduser._id,
            firstName:finduser.firstName,
            email:finduser.email,
            token:generateToken(finduser._id)

        });
    }catch(error){
        res.status(500).json({message:error.message});
    }
};