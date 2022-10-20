
import React from 'react';
import {Banner} from './Banner';
import '../Styles/nysl.css';
import { Navbarr } from './Navbar'; 




export const Contact = () =>{

    return ( 
        
        <div className="Contact">
            <Banner></Banner>
            <Navbarr></Navbarr>
           
        <div id="title-bar"><h2>Contact</h2></div>
        <img id="logo" src={require('../imagenes/nysl_logo.png')}  />
        <div id="content">
			<p><b>Please email us at </b><a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a></p>
			<p id='contact-bottom'><b>We will reply to your email as soon as we can. </b></p>
		</div>

</div>
 

    )
     }