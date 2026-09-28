const express=require("express");
const {createOrder,getOrderUser,getOrderByIdUser,getOrder,getOrderById}=require("../controllers/order");
const {checkAuthentication,restrictTo}=require("../middlewares/auth");
const router=express.Router();

router.post("/create",checkAuthentication,restrictTo(["Admin","User"]),createOrder);
router.get("/getUserOrder",checkAuthentication,restrictTo(["Admin","User"]),getOrderUser);
router.get("/getUserOrder/:id",checkAuthentication,restrictTo(["Admin","User"]),getOrderByIdUser);
router.get("/get",checkAuthentication,restrictTo(["Admin"]),getOrder);
router.get('/get/:id',checkAuthentication,restrictTo(["Admin"]),getOrderById);

module.exports=router;
