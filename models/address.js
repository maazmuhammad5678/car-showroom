const mongoose=require('mongoose');

// Schema
const addressSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    fullName:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    province:{
        type:String,
        required:true,
    },
    postalCode:{
        type:Number,
        required:true,
    }
},{timestamps:true});

// Model
const Address=mongoose.model('address',addressSchema);

module.exports=Address;