const product = require("../models/product");
const Product = require("../models/product");

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, categoryId, images } = req.body;

    if (!name || !description || !price || !categoryId) {
      return res.status(400).json({
        message: "All required fields must be provided"
      });
    }

    const productExist = await Product.findOne({ name });

    if (productExist) {
      return res.status(400).json({
        message: "Product already exists"
      });
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      categoryId,
      images
    });

    res.status(201).json({
      id: newProduct._id,
      name: newProduct.name,
      description: newProduct.description,
      price: newProduct.price,
      categoryId: newProduct.categoryId,
      images: newProduct.images
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
exports.getallproducts= async(req,res)=>{
    try{
      const getproducts=await product.find()/*.populate("categoryId");*/
      res.status(200).json(getproducts);
    }catch(error){
      res.status(500).json({message:"failed to fetch products"});
    }
};
exports.getproductbyid=async(req,res)=>{
  try{
    const productbyid=await product.findById(req.params.id).populate("categoryId");
    if(!productbyid){
      return res.status(404).json({message:"product not found"});
    }
    res.status(200).json(productbyid);
  }catch (arror){
    res.status(500).json({
      message:"failed to fetch product",
      error:error.message
    });
  }
};
exports.updateProduct=async (req,res)=>{
  try{
      const updateproduct=await product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
      ).populate("categoryId");

      if(!updatedProduct){
        return res.status(404).json({
          message:"product not found"
        });
      }
      res.status(200).json(updateproduct);
  }catch(error){
    res.status(500).json({
      message:"product update failed",
      error:error.message
    });
  }
};
exports.deleteProduct=async(req,res)=>{
  try{
    const dProduct=await product.findByIdAndDelete(req.params.id);
    if(!dProduct){
      return res.status(404).json({message:"product not found "});
    }
    res.status(200).json({
      message:"product deleted successfullly"
    });
  }catch(error){
    res.status(500).json({
      message:"product deletion failed",
      error:error.message
    });
  }
};