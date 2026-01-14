const  category= require("../models/category");


exports.createCategory=async(req,res)=>{
    try{
        const{categoryName}=req.body;
        const newCategory= await category.create({
            categoryName
        });
        res.status(201).json(newCategory);
    }catch(error){
                res.status(500).json({message:"category creation fialed"});
    }
};
exports.getCategory=async(req,res)=>{
    try{
    const  categories=await category.find().sort({createAt:-1});

    res.status(200).json({
        success:true,
        categories
    }) ;
} catch(error){
    res.status(500).json({
        success:false,
        message:"failed to fetch all categories",
        error:error.message
    });
}   
};