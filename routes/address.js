const express=require("express");
const {addAddress,getAddress,updateAddress,deleteAddress}=require("../controllers/address");
const {checkAuthentication,restrictTo}=require("../middlewares/auth");
const router=express.Router();

router.post("/add",checkAuthentication,restrictTo(["Admin","User"]),addAddress);
router.get("/get",checkAuthentication,restrictTo(["Admin","User"]),getAddress);
router.patch("/update/:id",checkAuthentication,restrictTo(["Admin"]),updateAddress);
router.delete("/delete/:id",checkAuthentication,restrictTo(["Admin"]),deleteAddress);

module.exports=router;
