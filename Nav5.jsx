import React from 'react'
import STYLE from "./nav5.module.css"


const Nav5 = () => {
  return (
    <nav id={STYLE.navblock}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZalkxXi5C27EZzg0B0J6IOwTXP2FtMOXskA&usqp=CAU" alt="" />
        <ul>
            <li><a href="">SEARCH</a></li>
            <li><a href="">LOGIN/SIGNUP</a></li>
            <li><a href="">FEEDBACK</a></li>
            <li><a href="">LOCATE US</a></li>
            <li><a href="">CONTACT</a></li>
            
        </ul>
    </nav>
  )
}

export default Nav5