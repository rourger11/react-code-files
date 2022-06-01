import React from 'react'
import {NavLink}from 'react-router-dom'
import Home from '../Home/Home'
import './Navbar.css'


export default function Navigation(){
  return (

      <>
  <ul className='navbar'>
  <li><NavLink to="/Home">Home</NavLink></li>
  <li><NavLink to="/About">About</NavLink></li>
  <li><NavLink to="/contact">Contact</NavLink></li>
</ul>
</>
  )
}
