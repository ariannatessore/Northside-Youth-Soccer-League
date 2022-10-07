import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/nysl.css';



export const Navbar= () =>{

    return (

        <div className="navbar">
            
        <ul  className = "nav-links">
          <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
       <Link to="/rules-and-policies">Rules and Policies</Link>
       <Link to="/game-information">Game Information</Link>
       <Link to="/registracion-form">Registration Form</Link>
       <Link to="/sign-in">Sign In</Link>
       <Link to="/chat">Chat</Link>
        </ul>
     
    </div>
     
     );

    }



 