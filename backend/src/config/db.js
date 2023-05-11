const mongoose=require("mongoose")

require("dotenv").config()

module.exports= ()=>{
    return mongoose.connect(process.env.db).then(()=>console.log("Connection successful")).catch(()=>console.log("Connection failed"))
}