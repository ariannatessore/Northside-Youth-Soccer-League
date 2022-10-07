import React from 'react';
import {Banner} from './Banner';
import '../Styles/nysl.css';
import { Navbar } from './Navbar';

export const Chat= () =>{

    return (  
        
        <div className="Chat">
        <Banner/>
       <Navbar />
       <div id="title-bar"><h2>Chat</h2></div>
       <img id="logo" src={require('../imagenes/nysl_logo.png')} alt="Northside Youth Soccer League Logo" />
       </div>
    )}