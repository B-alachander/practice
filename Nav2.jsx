import React from 'react'
import STYLE from "./nav2.module.css"


const nav2 = () => {
  return (
    <nav id={STYLE.navblock}>
        <h1 >COMPANY</h1>
        <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">about</a></li>
            <li><a href="">contact</a></li>
        </ul>
    </nav>
  )
}

export default nav2