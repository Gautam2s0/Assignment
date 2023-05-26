import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Styles/navbar.css"

export const Navbar = () => {
  return (
    <div id="navbar">
        <Link to="/" >Home</Link>
        <Link to="/game" >Game</Link>
        <Link to="/login" >Login</Link>
        {/* <Link to="/signup" >Signup</Link> */}
    </div>
  )
}
