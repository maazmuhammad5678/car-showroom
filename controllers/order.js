const Order=require("../models/order");
const Product=require("../models/product");
const Address=require("../models/address");

// Create Order
async function createOrder(req,res){
    const {addressId,items} = req.body;

    if(!addressId||!items||!items.length===0){
        return res.status(400).json({
            error:"Address and Product is required!",
        });
    }

    const address = await Address.findOne({
        _id:addressId,
        userId:req.user._id,
    });

    if(!address){
        return res.status(400).json({
            error:"Address not correct!",
        });
    }

    let totalAmount=0;
    let orderItems=[];

    for(const item of items){

        const product=await Product.findById(item.productId);

        if(!product){
            return res.status(400).json({
                error:'Product not Found',
            });
        }
        const itemQuantity=item.quantity||1;
    const itemTotal=product.price*itemQuantity;
    totalAmount+=itemTotal;

     orderItems.push({
        productId:product._id,
        quantity:itemQuantity,
        price:product.price,
    });
    }


    await Order.create({
        userId:req.user._id,
        items:orderItems,
        addressId:address._id,
        totalAmount:totalAmount,
    });

    return res.status(201).json({
        msg:"Order Created Successfully!",
    });
}

// Get Order User
async function getOrderUser(req,res){
    const order=await Order.find({
        userId:req.user._id,
    })
    .populate("items.productId")
    .populate("addressId");

    return res.status(200).json({order});
}

// Get Order
async function getOrder(req,res){
    const orders=await Order.find({})
    .populate("items.productId")
    .populate("addressId");

    return res.status(201).json({orders});
}

// Get Order By Id for User
async function getOrderByIdUser(req,res){
    const order=await Order.findOne({
        _id:req.params.id,
        userId:req.user._id,
    });

    if(!order){
        return res.status(400).json({
            error:"Order not Found!",
        });
    }

    return res.status(201).json({order});
}

// Get Order By Id
async function getOrderById(req,res){
    const order=await Order.findOne({
        _id:req.params.id,
    });

    if(!order){
        return res.status(400).json({
            error:"Order not Found!",
        });
    }

    return res.status(201).json({order});
}

module.exports={
    createOrder,
    getOrderUser,
    getOrder,
    getOrderByIdUser,
    getOrderById
};