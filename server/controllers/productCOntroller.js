const Product = require("../models/product");

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, categoryId, images } = req.body;

    //  validation
    if (!name || !description || !price || !categoryId) {
      return res.status(400).json({
        message: "All required fields must be provided"
      });
    }

    //  Check if product already exists (by name)
    const productExist = await Product.findOne({ name });

    if (productExist) {
      return res.status(400).json({
        message: "Product already exists"
      });
    }

    //  Create product
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
