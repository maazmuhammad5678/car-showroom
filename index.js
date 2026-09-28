const express=require("express");
const {connectMongoDb}=require("./connection");
const AdminRoute=require("./routes/admin");
const UserRoute=require('./routes/user');
const ProductRoute=require("./routes/product");
const AddressRoute=require("./routes/address");
const OrderRoute=require("./routes/order");
const CartRoute=require("./routes/cart");
const app=express();
const PORT=8000;

// Connection
connectMongoDb('mongodb://127.0.0.1:27017/Car_Showroom')
.then(()=>{
    console.log("MongoDb Connected");
}).catch((error)=>{
    console.log(error);
});

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/uploads',express.static("uploads"));

app.use("/api/admin",AdminRoute);
app.use("/api/user",UserRoute);
app.use("/api/product",ProductRoute);
app.use("/api/address",AddressRoute);
app.use("/api/order",OrderRoute);
app.use("/api/cart",CartRoute);

app.listen(PORT,()=>{
    console.log(`Server Started at PORT:${PORT}`);
});