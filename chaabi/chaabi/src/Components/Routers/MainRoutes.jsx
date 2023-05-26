import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home } from '../Pages/Home'
import { Game } from '../Pages/Game'
import { Login } from '../Pages/Login'
import { SignUp } from '../Pages/SignUp'
import { PrivateRoutes } from './PrivateRoutes'
import { UserProfile } from './../Pages/UserProfile';

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/game' element={<PrivateRoutes><Game/></PrivateRoutes>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
    </Routes>
  )
}
