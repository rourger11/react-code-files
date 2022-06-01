import React from 'react'
import {NavLink} from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
    return (
        <>
          <ul className="navbar">
            {/* <li>
              <NavLink to="/Home">Home</NavLink>
            </li> */}
            <li>
              <NavLink to="/Basicinfo">Basicinfo</NavLink>
            </li>
            <li>
              <NavLink to="/Qualification">Details</NavLink>
            </li>
            <li>
              <NavLink to="/Document">Documentation</NavLink>
            </li>
          </ul>
        </>
      );
}
