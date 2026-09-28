const User=require('../models/user');
const{setUser}=require("../Service/auth");

// Registration
async function handleUserRegistration(req,res){
    const {name,email,password}=req.body;

    await User.create({
        name,
        email,
        password,
    });

    return res.status(201).json({msg:"Registration Successfull"});
}

// Login
async function handleUserLogin(req,res){
    const {email,password}=req.body;

    const user=await User.findOne({email,password});

    if(!user){
        return res.status(400).json({
            error:'User not found!!',
        });
    }

    const token=setUser(user);

    return res.status(201).json({token});
}

module.exports={
    handleUserRegistration,
    handleUserLogin,
};