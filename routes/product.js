const express=require("express");
const {checkAuthentication,restrictTo}=require('../middlewares/auth');
const upload=require("../middlewares/upload");
const {handleAddProduct,handleGetProducts,handleGetProduct,handleUpdateProduct,handleDeleteProduct}=require("../controllers/product");
const router=express.Router();

router.post("/add",checkAuthentication,restrictTo(["Admin"]),upload.single("image"),handleAddProduct);
router.get("/getAll",handleGetProducts);
router.get("/get/:id",checkAuthentication,restrictTo(["Admin","User"]),handleGetProduct);
router.patch("/update/:id",checkAuthentication,restrictTo(['Admin']),upload.single("image"),handleUpdateProduct);
router.delete("/delete/:id",checkAuthentication,restrictTo(["Admin"]),handleDeleteProduct);

module.exports=router;