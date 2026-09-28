const express=require("express");
const {addToCart,getCart,deleteFromCart,emptyCart}=require("../controllers/cart");
const {checkAuthentication,restrictTo}=require("../middlewares/auth");
const router=express.Router();

router.post("/add",checkAuthentication,restrictTo(["Admin","User"]),addToCart);
router.get("/get",checkAuthentication,restrictTo(["Admin","User"]),getCart);
router.patch("/empty",checkAuthentication,restrictTo(["Admin","User"]),emptyCart);
router.delete("/delete/:productId",checkAuthentication,restrictTo(["Admin","User"]),deleteFromCart);

module.exports=router;
