const mongoose=require("mongoose");

// Schema
const cartSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    items:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"car",
                required:true,
            },
            quantity:{
                type:Number,
                min:1,
                required:true,
            },
            price:{
                type:Number,
                min:0,
                required:true,
            }
        }
    ],
    totalPrice:{
        type:Number,
        required:true,
        min:0,
        default:0,
    }
},{timestamps:true});

// Model
const Cart=mongoose.model("cart",cartSchema);

module.exports=Cart;