import React from 'react';
import {Banner} from './Banner';
import '../Styles/nysl.css';
import { Navbar } from './Navbar';

export const GameInfo = () =>{

    return (  
        <div className="Game_info">
            <Banner></Banner>
            <Navbar></Navbar>
            <div id="title-bar"><h2>NYSL Game Information</h2></div>
            <img id="logo" src={require('../imagenes/nysl_logo.png')} alt="Northside Youth Soccer League Logo" />




</div>
    )}