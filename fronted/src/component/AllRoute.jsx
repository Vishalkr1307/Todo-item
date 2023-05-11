import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../page/Login'
import { SignUp } from '../page/SignUp'
import { Todo } from '../page/Todo'
import { ReqAuth } from './ReqAuth'
import { Home } from '../page/Home'

export const AllRoute = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/todo' element={<ReqAuth><Todo/></ReqAuth>}></Route>
    </Routes>
  )
}
