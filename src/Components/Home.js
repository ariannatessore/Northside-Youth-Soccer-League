import React from 'react';
import '../Styles/nysl.css';



export const Home = () =>{

    return (
       <div className = "Home">
     <div id="title-bar"><h2>Upcoming Events</h2></div>
     <img id="logo" src={require('../imagenes/nysl_logo.png')} alt="Northside Youth Soccer League Logo" />
     <div id="content">
			<p className="date">August 4</p>
			<p className="description">NYSL Fundraiser</p>
			<p className="date">August 16</p>
			<p className="description">Season Kick-off: Meet the Teams</p>
			<p className="date">September 1</p>
			<p className="description">First Game of the Season (Check Game Schedule for details)</p>
		</div>
        

        
        </div>

 );

}