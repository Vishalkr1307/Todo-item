const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema({
    email:{type: 'string',required: true},
    password:{type: 'string',required: true},
    // login:{type: 'string'}

},{
    timestamps:true,
    versionKey:false
})
userSchema.pre("save",function (next){
    
    if( !this.isModified("password")) return next();
    this.password=bcrypt.hashSync(this.password,8)
    next()

})
userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password,this.password)

}
module.exports=mongoose.model("user",userSchema)