const {getUser} = require("../Service/auth");

function checkAuthentication(req,res,next){
    const tokenHeader=req.headers.authorization;

    if(!tokenHeader){
        return res.status(400).json({
           error:"Header not found!", 
        });
    }

    const token=tokenHeader.split("Bearer ")[1];
    const user=getUser(token);

    if(!user){
        return res.status(400).json({
            error:"user not found!",
        });
    }

    req.user=user;
    next();
}

function restrictTo(roles){
    return (req,res,next)=>{
          console.log("Allowed roles:", roles);
        console.log("req.user:", req.user);
        console.log("req.user.role:", req.user?.role);

        if(!req.user){
            return res.json({
                error:'User not Found!',
            });
        }

        if(!roles.includes(req.user.role)) return res.json({msg:" UnAuthorized "});
        next();
    }
    
}

module.exports={
    checkAuthentication,
    restrictTo,
};