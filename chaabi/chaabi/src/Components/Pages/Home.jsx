import React from 'react'
import styles from "../Styles/Home.css"
import img from "../Images/keyboard.gif"

export const Home = () => {
  return (
    <div id='home'>
      
      <div id="gifImg">
       <h1>Touch Typing</h1>
        <img id="gif" src={img} alt={img} />
      </div>
    </div>
  )
}
