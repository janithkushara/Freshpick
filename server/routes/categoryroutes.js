const express=require("express");
const{
    createCategory,
    getCategory
}=require("../controllers/categoryController");

const router =express.Router();
router.post("/create",createCategory);
router.get("/",getCategory);

module.exports=router;