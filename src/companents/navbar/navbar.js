import React from 'react'
import "./navbar.css"
import { Link, NavLink } from 'react-router-dom'
const Navbar = ({setOpen , open}) => {
  return (
    <nav>

        <h1> <a href="">logo </a></h1>

        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"aboute"}>Aboute</NavLink></li>
            <li><NavLink to={"cantact"}>Contact</NavLink></li>
        </ul>
        <button onClick={() => setOpen(!open)}>click</button>
    </nav>
  )
}

export default Navbar