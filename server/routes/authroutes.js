const express=require("express");
const{
    signupbutton,
    signinbutton
}=require("../controllers/authcontroller");

const router=express.Router();
router.post("/register",signupbutton);
router.post("/login",signinbutton);

module.exports=router;