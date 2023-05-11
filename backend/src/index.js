const express=require("express")
const app= express()
const signup=require("./moduleControl/register")
const Login=require("./moduleControl/Login")
const Todo=require("./moduleControl/todoControl")
const passport=require("./config/passport")
const session=require("express-session")
const cors=require("cors")

app.use(express.json())
app.use("/signup",signup)
app.use("/login",Login)
app.use("/todo",Todo)
app.use(cors())

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
passport.serializeUser(function ({user,token},done){
  
  
  done(null,{user,token})

})
passport.deserializeUser(function ({user,token},done){
  console.log("2")
  done(null,{user,token})


})

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        
        failureRedirect: '/login'
}),async (req,res)=>{
  try{
    const {user,token}=req.user
    return res.status(200).send({user,token})

  }
  catch(err){
    return res.status(400).send(err)
  }
  
  

  
  
});
app.get("/auth/google/success",(req,res)=>{
  return res.status(200).send({user:req.user.user,token:req.user.token})
})
app.get("/auth/google/failure",(req,res)=>{
  return res.status(200).redirect("/")
})
app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  async function(req, res) {
    try{
    const {user,token}=req.user
    return res.status(200).send({user,token})

  }
  catch(err){
    return res.status(400).send(err)
  }
  });


module.exports=app