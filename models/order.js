const mongoose= require('mongoose');

//Schema
const orderSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
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
        addressId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'address',
            required:true,
        },
        totalAmount:{
            type:Number,
            required:true,
            min:0,
            default:0,
        },
        paymentStatus:{
            type:String,
            enum:['Pending','Paid','Failed'],
            default:"Pending",
        },
        orderStatus:{
            type:String,
            enum:['Pending','Confirmed','Completed','Cancelled'],
            default:'Pending',
        }
},{timestamps:true});

// Model
const Order=mongoose.model('order',orderSchema);

module.exports=Order;