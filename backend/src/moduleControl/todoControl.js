const express=require("express")
const router=express.Router()
const Todo=require("..//module/todo")
const {body,validationResult}=require("express-validator")
const formatOferror=require("..//utlies/validator")
const authinocate=require("..//middleware/authinacte")

router.post("",authinocate,body("name").isString().notEmpty().withMessage("it must be sting"),body("description").isString().notEmpty().withMessage("it must be string"),async (req,res)=>{

    try{
        let error=validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).send(formatOferror(error.array()).join(""))

        }
        let todo=await Todo.findOne({name:req.body.name}).lean().exec()
        if(todo){
            return res.status(400).send("item is already in the queue")
        }
        todo=await Todo.create(req.body)
        return res.status(200).send(todo)


    }
    catch(err){
        return res.status(400).send(err)
    }
})
router.get("",async (req, res) => {
    try{
        const page=+req.query.page||1
        const size=+req.query.size||10
        const skip=(page-1)*size
        const serch=req.query.serch
        if(serch){
            let todo=await Todo.find({name:serch}).lean().exec()
            return res.status(200).send(todo)


        }
        let todo=await Todo.find().skip(skip).limit(size).lean().exec()
        return res.status(200).send(todo)

    }
    catch(err){
        return res.status(400).send(err)
    }
})
router.get("/:id",async (req, res) => {
    try{
        let todo=await Todo.findById(req.params.id).lean().exec()
        return res.status(200).send(todo)

    }
    catch(err){
        return res.status(400).send(err)
    }
})
router.put("/:id",async (req, res) => {
    try{
        let todo=await Todo.findByIdAndUpdate(req.params.id,req.body).lean().exec()
        return res.status(200).send(todo)

    }
    catch(err){
        return res.status(400).send(err)
    }
})
router.patch("/:id",async (req, res) => {
    try{
        let todo=await Todo.findByIdAndUpdate(req.params.id,req.body).lean().exec()
        return res.status(200).send(todo)

    }
    catch(err){
        return res.status(400).send(err)
    }
})
router.delete("/:id",async (req, res) => {
    try{
        let todo=await Todo.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(todo)

    }
    catch(err){
        return res.status(400).send(err)
    }
})

module.exports=router


