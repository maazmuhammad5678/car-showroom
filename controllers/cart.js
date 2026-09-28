const Cart=require("../models/cart");
const Car=require('../models/product');

// Add to Cart
async function addToCart(req,res){
    
    const {productId,quantity}=req.body;
    const product=await Car.findById(productId);

    if(!product){
       return res.status(400).json({
            error:"Product  not found!",
        });
    }

    let cart=await Cart.findOne({
        userId:req.user._id,
    });

    if(!cart){
        cart=new Cart({
            userId:req.user._id,
            items:[],
            totalPrice:0,
    });
    }

    cart.items.push({
        productId:product._id,
        quantity:quantity||1,
        price:product.price
    });

    cart.totalPrice+=product.price*(quantity||1);

    await cart.save();

    return res.status(201).json({
        msg:"Product Added Successfully!",
    });
}

//View Cart
async function getCart(req,res){
    const cart =await Cart.findOne({
        userId:req.user._id
    }).populate("items.productId");

    if(!cart){
        return res.status(400).json({
            error:"Cart not Found!",
        });
    }

    return res.status(200).json({cart});
}

// Delete from Cart
async function deleteFromCart(req,res){
    const cart=await Cart.findOne({
        userId:req.user._id,
    });

    if(!cart){
        return res.status(400).json({
            error:"Cart not found!",
        });
    }
    


    cart.items=cart.items.filter(
        item=>item.productId.toString() !== req.params.productId
    );

    cart.totalPrice=cart.items.reduce((total,item)=>total+(item.price*item.quantity),0);

    await cart.save();

    return res.status(201).json({
        msg:"Product Removed From Cart!",
    });
}

// Empty Cart
async function emptyCart(req,res){
    const cart=await Cart.findOne({
        userId:req.user._id,
    });

    if(!cart){
        return res.status(400).json({
            error:"Cart not found!",
        });
    }

    cart.items=[];
    cart.totalPrice=0;

    await cart.save();

    return res.status(201).json({
        msg:"Cart is  Empty",
    });
}

module.exports={
    addToCart,
    getCart,
    deleteFromCart,
    emptyCart,
};