var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const GitHubStrategy=require("passport-github2")
const passport=require("passport")
const User=require("..//module/user")
require("dotenv").config()
const { v4: uuidv4 } = require('uuid')
const newToken=require("..//utlies/token")

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret:process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:2345/auth/google/callback",
  passReqToCallback   : true
},
async function(request, accessToken, refreshToken, profile, done) {
 
  let user=await User.findOne({email:profile._json.email}).lean().exec()
  if(!user){
    user=await User.create({email:profile._json.email,password:uuidv4()})
    
  }
  const token=newToken(user)
  
  done(null,{user,token})
  
}
));
passport.use(new GitHubStrategy({
  clientID:process.env.GITHUB_CLIENT_ID,
  clientSecret:process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:2345/auth/github/callback"
},
async function(accessToken, refreshToken, profile, done) {
  
  let user=await User.findOne({email:profile._json.login}).lean().exec()
  if(!user){
    user=await User.create({email:profile._json.login,password:uuidv4()})
    
  }
  const token=newToken(user)
  
  
  done(null,{user,token})
}
))




   

module.exports=passport