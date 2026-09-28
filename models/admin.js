const mongoose=require('mongoose');

// Schema
const adminSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    }
    ,role:{
        type:String,
        required:true,
        default:"Admin",
    }
},{timestamps:true});

// Model
const Admin=mongoose.model("admin",adminSchema);

module.exports=Admin;