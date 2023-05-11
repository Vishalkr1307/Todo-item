const jwt=require("jsonwebtoken")
require("dotenv").config()
const verifyToken=(token)=>{
    return new Promise((resolve, reject) => {
        jwt.verify(token,process.env.PRIVATE_KEY,function(err,decode){
            if(err){
                reject(err);
            }
            resolve(decode);
        })

    })
}
module.exports=async (req,res,next)=>{
    if(!req?.headers?.authorization) return res.status(400).send("please provide vailid token")
    const bearerToken = req?.headers?.authorization
    
    if(!bearerToken.startsWith('Bearer')) return res.status(400).send("please provide bearer token")
    const token=bearerToken.split(" ")[1]
    let user;
    user=await verifyToken(token)
    req.user=user.user
    next()


}