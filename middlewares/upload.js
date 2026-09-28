const multer=require("multer");

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/');
    },
    filename:function(req,file,cb){
        const filename=file.originalname.replace(/\s+/g, "-");
        cb(null,`${Date.now()}-${filename}`);
    }
})

const upload=multer({
    storage:storage,
});

module.exports=upload;