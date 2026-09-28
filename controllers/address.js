const Address=require("../models/address");

// Add Address
async function addAddress(req,res){
    const {fullName,phone,address,city,province,postalCode}=req.body;

    if(!fullName||!phone||!address||!city||!province||!postalCode){
        return res.status(400).json({
            error:'Fill all the required fields!',
        });
    }
    await Address.create({
        userId:req.user._id,
        fullName,
        phone,
        address,
        city,
        province,
        postalCode,
    });

    return res.status(201).json({
        msg:"Address added Successfully!",
    });
}

// Get Address
async function getAddress(req,res){
    const address=await Address.findOne({
        userId:req.user._id,
    });

    if(!address){
        return res.status(400).json({
            error:'Address not Found',
        });
    }

    return res.status(201).json({address});
}

// Update Address
async function updateAddress(req,res){
    const address=await Address.findOneAndUpdate({
        _id:req.params.id,
        userId:req.user._id,
    },req.body,{
        new:true,
        runValidators:true,
    });

    if(!address){
        return res.status(400).json({
            error:"Address not Found!",
    });
    }

    return res .status(201).json({
        msg:"Address Updated Successfully!",
    });

}

//Delete Address
async function deleteAddress(req,res){
    const address=await Address.findOneAndDelete({
        _id:req.params.id,
        userId:req.user._id,
    });

     if(!address){
        return res.status(400).json({
            error:"Address not Found!",
    });
    }

    return res.status(201).json({
        msg:"Address Deleted Successfully!",
    });
}

module.exports={
    addAddress,
    getAddress,
    updateAddress,
    deleteAddress,
};