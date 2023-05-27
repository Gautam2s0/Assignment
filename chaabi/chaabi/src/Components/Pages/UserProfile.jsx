import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../Styles/Profile.css"
import { useNavigate } from 'react-router-dom';
import {UseLogOut} from "../Redux/UserAuth/action"

export const UserProfile = () => {
const dispatch=useDispatch()
const user=JSON.parse(localStorage.getItem('user'))
const navigate=useNavigate()

const handleClick=()=>{
  dispatch(UseLogOut())
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  
  navigate('/') 
  window.location.reload()
  
}
useEffect(()=>{

},[user])

  return (
    <div id="userProfile">
      <div id='userInnerDiv'>
        <img src={user.avtar} alt={user.avtar} />
        <div id="firt">
          <div className='info'>
            <h3>UserName : </h3>
            <strong>{user.name}</strong>
          </div>
          <div className='info'>
            <h3>User Email : </h3>
            <strong>{user.email}</strong>
          </div>
          
          <button id="btn" onClick={handleClick}>Log out</button>
        </div>
        
      </div>
    </div>
  )
}
