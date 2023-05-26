import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Styles/navbar.css"

export const Navbar = ({handleChnage}) => {
  const token=JSON.parse(localStorage.getItem('token'))
  handleChnage()
  return (
    <div id="navbar">
        <Link to="/" >Home</Link>
        <Link to="/game" >Game</Link>
        {
          token?<Link to="/profile" >Profile</Link>:<Link to="/login" >Login</Link>
        }
        {/* <Link to="/signup" >Signup</Link> */}
    </div>
  )
}
