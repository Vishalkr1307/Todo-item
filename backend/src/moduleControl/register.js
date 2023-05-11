const express=require("express");
const router=express.Router()
const User=require("..//module/user")
const {body,validationResult}=require("express-validator")
const formatOfError=require("..//utlies/validator")
const newToken=require("..//utlies/token")

router.post("",body("email").isEmail().withMessage("it must be email"),body("password").isNumeric().isLength({min:5}).withMessage("password must have greater than 5"),async (req,res)=>{

    try{
        const error=validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).send(formatOfError(error.array()).join(""))
        }

        let user=await User.findOne({email:req.body.email}).lean().exec()
        if(user){
            return res.status(400).send("Email is already in use")
        }
        user=await User.create(req.body)
        const token=newToken(user)
        
        return res.status(200).send({user,token})

    }
    catch(err){
        return res.status(400).send(err)
    }
})
module.exports=router
