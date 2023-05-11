const express=require("express")
const router=express.Router()
const {body,validationResult}=require("express-validator")
const formatOfError=require("..//utlies/validator")
const User=require("..//module/user")
const newTOken=require("..//utlies/token")

router.post("",body("email").isEmail().notEmpty().withMessage("email must be"),body("password").notEmpty().withMessage("password must be"),async (req,res)=>{
    try{
        let error=validationResult(req)
       if(!error.isEmpty()){
        return res.status(400).send(formatOfError(error.array()).join(""))
       }
        let user=await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).send("email not found")
        }
        const matchPassword=user.checkPassword(req.body.password)
        if(!matchPassword){
            return res.status(400).send("password does not match")

        }
        const token=newTOken(user)
        return res.status(200).send({user,token})

    }
    catch(err){
        return res.status(400).send(err)
    }
})
module.exports=router
