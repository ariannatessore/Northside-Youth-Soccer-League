import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/nysl.css';



export const Navbar= () =>{

    return (

        <div id="nav-bar">
        <li  className = "active-link">
          <Link to="/">Home</Link>
        </li>
        <li className="inactive-link">
          <Link to="/about">About</Link>
        </li>
        {/* <li className="inactive-link">
          <Link to="/about">About</Link>
        </li>
        <li  className="inactive-link">
          <Link to="/contact">Contact</Link>
        </li>
        <li  className="inactive-link">
          <Link to="/rules-and-policies">Rules and Policies</Link>
        </li>
        <li  className="inactive-link">
          <Link to="/game-information">Game Information </Link>
        </li>
    
        <li  className="inactive-link">
          <Link to="/registration-form">Registration Form </Link>
        </li>
     */}
    </div>
     
     );

    }



 