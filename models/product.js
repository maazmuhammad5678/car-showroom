const mongoose=require("mongoose");

// Schema
const carSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    carName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        min:0,
    },
    quantity:{
        type:Number,
        required:true,
        min:0,
    },
    category:{
        type:String,
        required:true,
    }
},{timestamps:true});

//Model
const Car=mongoose.model("car",carSchema);

module.exports=Car;
