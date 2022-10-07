
import React from 'react';
import {Banner} from './Banner';
import '../Styles/nysl.css';
import { Navbar } from './Navbar'; 




export const Contact = () =>{

    return ( 
        <div className="Contact">
            <Banner></Banner>
            <Navbar></Navbar>
        <div id="title-bar"><h2>Contact</h2>
        <img id="logo" src={require('../imagenes/nysl_logo.png')}  />
        <div id="content">
			<p>Please email us at <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a></p>
			<p id='contact-bottom'>We will reply to your email as soon as we can.</p>
		</div>

</div>
 </div>
    )
     }