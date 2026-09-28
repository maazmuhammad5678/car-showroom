const Admin=require('../models/admin');
const{setUser}=require("../Service/auth");

// Registration
async function handleAdminRegistration(req,res){
    const {email,password,companyName,role}=req.body;
 console.log(req.body);
    await Admin.create({
        email,
        password,
        companyName,
        role,
    });

    return res.status(201).json({msg:"Registration Successfull"});
}

// Login
async function handleAdminLogin(req,res){
    const {email,password}=req.body;

    const user=await Admin.findOne({email,password});

    if(!user){
        return res.status(400).json({
            error:'User not found!!',
        });
    }

    const token=setUser(user);

    return res.status(201).json({token});
}

module.exports={
    handleAdminRegistration,
    handleAdminLogin,
};