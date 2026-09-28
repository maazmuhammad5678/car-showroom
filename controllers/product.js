const Car=require('../models/product');

// Add Product
async function handleAddProduct(req,res){
    const {carName,description,price,quantity,category}=req.body;

    if(!carName||!description||!price||quantity===undefined||!category){
        return res.status(400).json({
            error:"Please Fill All The Required Fields...",
        });
    }

      if(!req.file){
        return res.status(400).json({
            error:"Product image is required...",
        });
     }
          const image=`http://localhost:8000/uploads/${req.file.filename}`;

    await Car.create({
        image,
        carName,
        description,
        price,
        quantity,
        category
    });

    return res.status(201).json({
        msg:"Car Registered Successfully!"});
}

// Get Products
async function handleGetProducts(req,res){
    const cars=await Car.find({});
    
    if(!cars){
        return res.status(400).json({
            msg:"No Car Available!",
        });
    }


    return res.status(200).json({cars});
}

// Get Product
async function handleGetProduct(req,res){
    const car=await Car.findById(req.params.id);

    if(!car){
        return res.status(400).json({
            error:"Car not found!",
        });
    }

    return res.status(200).json({car});
}

// Update Product
async function handleUpdateProduct (req,res){
    const updateData={
        ...req.body,
    }

     if (req.file) {
        updateData.image = `http://localhost:8000/uploads/${req.file.filename}`;
    }

    const car=await Car.findByIdAndUpdate(req.params.id,
        {$set:updateData},{
            returnDocument:true,
            runValidators:true
        }
    );

    if(!car){
        return res.status(400).json({
            error:"Car not found!",
        });
    }

    return res.status(201).json({
        msg:'Car Updated Successfully',
});
}

//Delete Product
async function handleDeleteProduct(req,res){
    const car=await Car.findByIdAndDelete(req.params.id);

    if(!car){
        return res.status(400).json({
            error:"Car not found!",
        });
    }

    return res.status(201).json({
        msg:'Car Deleted Successfully!',
    });
}

module.exports={
    handleAddProduct,
    handleGetProducts,
    handleGetProduct,
    handleUpdateProduct,
    handleDeleteProduct,
};