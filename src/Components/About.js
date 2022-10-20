import React from 'react';
import {Banner} from './Banner';
import '../Styles/nysl.css';
import { Navbarr } from './Navbar';

export const About = () =>{

    return (  
        
        <div className="About">
        <Banner/>
       <Navbarr />
       <div id="title-bar"><h2>About</h2></div>
       <img id="logo" src={require('../imagenes/nysl_logo.png')} alt="Northside Youth Soccer League Logo" />
       <div id="content">
			<h3>Mission</h3>
			<p className="description">To support young athletes living in Chicago's northside
			neighborhoods, who have an interest in learning and playing
			soccer, with opportunities to learn and practice skills related
			to the game of soccer, specifically those skills around team
			cooperation and good sportsmanship.</p>
			<h3>Vision</h3>
			<p className="description">The Northside Youth Soccer League aspires to develop strong,
			well-rounded, and mindful athletes through the building of
			character, self-discipline, and leadership.</p>
			<h3>General Information</h3>
			<p className="description">The Northside Youth Soccer League was established in 1996 to
			provide athletes residing in Chicago's northside neighborhoods an
			environment in which to learn and play soccer. To be a member of
			NYSL, you must be between the ages of 4 - 12 and reside in a Chicago
			northside neighborhood. NYSL is ran by a small full-time staff, and
			relies on the generous volunteer time of parents and previous league
			members.</p>
		</div>


</div>
    )


}