import React from 'react';
import {Banner} from './Banner';
import '../styles/nysl.css';
import { Navbarr } from './Navbar';
import{Login} from './chat/Login'








export const SignIn = () =>{

    

    return (  
        
        <div className="SignIn">
        <Banner/>
       <Navbarr />
      
       { <img id="logo" src={require('../imagenes/nysl_logo.png')} alt="Northside Youth Soccer League Logo" /> }
       

   <Login></Login>
     </div>

       )}
       
      
       

      
     

      
       