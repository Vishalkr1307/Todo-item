import axios from "axios";
import {  ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCESSS, DEL_TODO_FAILURE, DEL_TODO_REQUEST, DEL_TODO_SUCESSS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCESSS, UPDATE_TODO_FAILURE, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCESSS } from "./actionType";

export const addTodoRequest=(payload)=>({
    type:ADD_TODO_REQUEST,
    payload
})
export const addTodoSucess=(payload)=>({
    type:ADD_TODO_SUCESSS,
    payload
})
export const addTodoFailure=(payload)=>({
    type:ADD_TODO_FAILURE,
    payload
})
export const getTodoRequest=(payload)=>({
    type:GET_TODO_REQUEST,
    payload
})
export const getTodoSucess=(payload)=>({
    type:GET_TODO_SUCESSS,
    payload
})
export const getTodoFailure=(payload)=>({
    type:GET_TODO_FAILURE,
    payload
})
export const delTodoRequest=(payload)=>({
    type:DEL_TODO_REQUEST,
    payload
})
export const delTodoSucess=(payload)=>({
    type:DEL_TODO_SUCESSS,
    payload
})
export const delTodoFailure=(payload)=>({
    type:DEL_TODO_FAILURE,
    payload
})
export const updatelTodoRequest=(payload)=>({
    type:UPDATE_TODO_REQUEST,
    payload
})
export const updateTodoSucess=(payload)=>({
    type:UPDATE_TODO_SUCESSS,
    payload
})
export const updateTodoFailure=(payload)=>({
    type:UPDATE_TODO_FAILURE,
    payload
})
export const updateTodoData=(payload,text)=>(dispatch)=>{
    dispatch(updatelTodoRequest())
    axios.put(`/todo/${payload}`,text).then(()=>dispatch(getTodoData()))
}
export const delTodoData=(payload)=>(dispatch)=>{
    dispatch(delTodoRequest())
    axios.delete(`/todo/${payload}`).then(()=>dispatch(getTodoData())).catch((err)=>dispatch(delTodoFailure(err.data)))
}
export const getTodoData=(payload)=>(dispatch)=>{
    dispatch(getTodoRequest())
    axios.get("/todo").then((d)=>dispatch(getTodoSucess(d.data))).catch((err)=>dispatch(getTodoFailure(err.response.data)))
}
export const addTododata=(payload,token)=>(dispatch)=>{
    dispatch(addTodoRequest())
    axios.post("/todo",payload,{
        headers:{Authorization: `Bearer ${token}`}
    }).then((d)=>dispatch(getTodoData())).catch((err)=>dispatch(addTodoFailure(err.response.data)))
}
