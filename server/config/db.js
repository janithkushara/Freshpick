const mongoose = require("mongoose");

const connectDB=async()=>{
      try{
        await mongoose.connect(Process.env.MONGO_URI);
        console.log("mongodb connected");
      }catch(error){
        console.error("mongoDB connection failed",error.message);
        process.exit(1);
      }

};
Module.exports=connectDB