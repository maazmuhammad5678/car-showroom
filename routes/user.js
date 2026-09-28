const express=require("express");
const {handleUserRegistration,handleUserLogin}=require("../controllers/user");
const router=express.Router();

router.post("/signup",handleUserRegistration);
router.post("/login",handleUserLogin);

module.exports=router;
