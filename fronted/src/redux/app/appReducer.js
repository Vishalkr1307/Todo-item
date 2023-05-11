import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCESSS, DEL_TODO_FAILURE, DEL_TODO_REQUEST, DEL_TODO_SUCESSS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCESSS } from "./actionType"

const init={
    isLoading:false,
    isError:"",
    data:[]
}
export const appReducer=(store=init,{type,payload})=>{
    switch(type){
        case ADD_TODO_REQUEST:
            return {...store,isLoading:true}
        case ADD_TODO_SUCESSS:
            return {...store,isLoading:false}
        case ADD_TODO_FAILURE:
            return {...store,isLoading:false,isError:payload}
        case GET_TODO_REQUEST:
            return {...store,isLoading:true}
        case GET_TODO_SUCESSS:
            return {...store,isLoading:false,data:payload}
        case GET_TODO_FAILURE:
            return {...store,isLoading:false,error:payload}
        case DEL_TODO_REQUEST:
            return {...store,isLoading:true}
        case DEL_TODO_SUCESSS:
            return {...store,isLoading:false}
        case DEL_TODO_FAILURE:
            return {...store,isLoading:false,error:payload}
        default:
            return {...store}
    }

}