import React from 'react';
import {Banner} from './Banner';
import '../Styles/nysl.css';
import { Navbarr } from './Navbar';

export const SignIn = () =>{

    return (  
        
        <div className="SignIn">
        <Banner/>
       <Navbarr />
       <div id="title-bar"><h2>Sign In</h2></div>
       <img id="logo" src={require('../imagenes/nysl_logo.png')} alt="Northside Youth Soccer League Logo" />
       </div>
       )}