const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true}
},{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("todo", todoSchema)
