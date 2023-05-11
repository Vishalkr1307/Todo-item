import axios from "axios"
import { ADD_LOGIN_REQUEST ,ADD_LOGIN_FAILURE,ADD_LOGIN_SUCESSS, ADD_SIGNUP_REQUEST, ADD_SIGNUP_SUCESSS, ADD_SIGNUP_FAILURE, GOOGLE_AUTH_REQUEST, GOOGLE_AUTH_SUCESSS, GOOGLE_AUTH_FAILURE, GITHUB_AUTH_REQUEST, GITHUB_AUTH_SUCESSS, GITHUB_AUTH_FAILURE} from "./actionType"

export const addLoginRequest=(payload)=>({
    type:ADD_LOGIN_REQUEST,
    payload
})
export const addLoginSucess=(payload)=>({
    type:ADD_LOGIN_SUCESSS,
    payload
})
export const addLoginFailure=(payload)=>({
    type:ADD_LOGIN_FAILURE,
    payload
})
export const addSignupRequest=(payload)=>({
    type:ADD_SIGNUP_REQUEST,
    payload
})
export const addSignupSucess=(payload)=>({
    type:ADD_SIGNUP_SUCESSS,
    payload
});
export const addSignupFailures=(payload)=>({
    type:ADD_SIGNUP_FAILURE,
    payload
})
export const googleAuthRequest=(payload)=>({
    type:GOOGLE_AUTH_REQUEST,
    payload
})
export const googleAuthSucess=(payload)=>({
    type:GOOGLE_AUTH_SUCESSS,
    payload
})
export const googleAuthFailure=(payload)=>({
    type:GOOGLE_AUTH_FAILURE,
    payload
})
export const gitAuthRequest=(payload)=>({
    type:GITHUB_AUTH_REQUEST,
    payload
})
export const gitAuthSucess=(payload)=>({
    type:GITHUB_AUTH_SUCESSS,
    payload
})
export const gitAuthFailure=(payload)=>({
    type:GITHUB_AUTH_FAILURE,
    payload
})
export const googleAuthData=(payload)=> (dispatch)=>{
   
        dispatch(googleAuthRequest())
         axios.get("/auth/google").then((d)=>console.log(d)).catch((err)=>console.log(err))
        
        
        
        

    }
    
    

export const gitAuthData=(payload)=>(dispatch)=>{
    dispatch(gitAuthRequest())
    axios.get("/auth/github",).then((d)=>console.log(d)).catch((err)=>console.log(err))
        
        
    
}
export const addSignupData=(payload)=>(dispatch)=>{
    dispatch(addSignupRequest())
    axios.post("/signup", payload).then((res)=>dispatch(addSignupSucess(res.data))).catch((err)=>dispatch(addSignupFailures(err.response.data)))
}
export const addLoginData=(payload)=>(dispatch)=>{
    dispatch(addLoginRequest())
    axios.post("/login", payload).then((r)=>dispatch(addLoginSucess(r.data))).catch((err)=>dispatch(addLoginFailure(err.response.data)))
}