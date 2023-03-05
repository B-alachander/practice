import React from 'react'
import STYLE from "./nav1.module.css"


const Nav1 = () => {
  return (
    <nav>
    <ul className={STYLE.list}>
        <li><a href="#">INTRO</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">PRODUCTS</a></li>
        <li><a href="#">HELP</a></li>
    </ul>
</nav>
  )
}

export default Nav1