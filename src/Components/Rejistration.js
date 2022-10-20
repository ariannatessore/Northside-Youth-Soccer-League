import React from 'react';
import {Banner} from './Banner';
import '../Styles/nysl.css';
import { Navbarr } from './Navbar';

export const Registration = () =>{

    return (  
        
        <div className="Registration">
        <Banner/>
       <Navbarr />
       <div id="title-bar"><h2>Registration Form</h2></div>
       <img id="logo" src={require('../imagenes/nysl_logo.png')} alt="Northside Youth Soccer League Logo" />
       
       

       </div>
    )}