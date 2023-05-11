import { getLocalData, postLocalData } from "../../utiles/localStorage"
import { ADD_LOGIN_FAILURE, ADD_LOGIN_REQUEST, ADD_LOGIN_SUCESSS, ADD_SIGNUP_FAILURE, ADD_SIGNUP_REQUEST, ADD_SIGNUP_SUCESSS } from "./actionType"

const init={
    loading: false,
    auth:getLocalData("token")?true:false||false,
    token:getLocalData("token")||"",
    error:""
}
export const authReducer=(store=init,{type,payload})=>{
    switch(type){
        case ADD_LOGIN_REQUEST:
            return {...store,loading:true}
        case ADD_LOGIN_SUCESSS:
            postLocalData("token",payload.token)
            return {...store,loading:false,auth:true,token:payload.token}
        case ADD_LOGIN_FAILURE:
            return {...store,loading:false,error:payload}
        case ADD_SIGNUP_REQUEST:
            return {...store,loading:true}
        case ADD_SIGNUP_SUCESSS:
            console.log(payload)
            postLocalData("token",payload.token)

            return {...store,loading:false,auth:true,token:payload.token}
        case ADD_SIGNUP_FAILURE:
            return {...store,error:payload}
        default:
            return {...store}
    }

}