import React from 'react';
import {Banner} from './Banner';
import '../Styles/nysl.css';
import { Navbarr } from './Navbar';
import { HomeChat } from './Chat/HomeChat';

export const Chat = () =>{

    return (  
        
        <div className="About">
        <Banner/>
       <Navbarr />
       <div id="title-bar"><h2>Chat</h2></div>
       <img id="logo" src={require('../imagenes/nysl_logo.png')} alt="Northside Youth Soccer League Logo" />
       <HomeChat></HomeChat>
       </div>);}