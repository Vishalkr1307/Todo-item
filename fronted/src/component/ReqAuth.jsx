import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const ReqAuth = ({children}) => {
    const location=useLocation()
    const {auth}=useSelector((store)=>store.auth)
    console.log(auth)
    if(!auth){
        
       return <Navigate to={'/login'} state={{from:location}}  />

    }
    return children
  
  
}
