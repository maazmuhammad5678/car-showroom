const express=require("express");
const {handleAdminRegistration,handleAdminLogin}=require("../controllers/admin");
const router=express.Router();

router.post("/signup",handleAdminRegistration);
router.post("/login",handleAdminLogin);

module.exports=router;
