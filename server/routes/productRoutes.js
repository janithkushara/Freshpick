const express= require("express");
const {
    addProduct,
    getallproducts,
    getproductbyid,
    updateProduct,
    deleteProduct
}= require("../controllers/productCOntroller");

const router=express.Router();
router.post("/addproduct",addProduct);
router.get("/",getallproducts);
router.get("/:id",getproductbyid);
router.post("/:id",updateProduct);
router.delete("/:id",deleteProduct);