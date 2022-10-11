import React from 'react';
import {Banner} from './Banner';
import '../Styles/nysl.css';
import { Navbar } from './Navbar';
import Tables from '.././Tabla/Tabla';



export const GameInfo = () =>{

    return (  
        
        <div className="GameInfo">
        <Banner/>
       <Navbar />
       <div id="title-bar"><h2>Game Information</h2></div>
       
       <h3>Fall Schedule</h3>
       <p>All games take place on Saturday.</p>
            <Tables></Tables>

<div className="more-info">

<p class='additional-game-info'>Facility Type: Outdoor</p>
      <p class='additional-game-info'>Additional Information: If deemed 
        necessary by NYSL, games may be shortened or cancelled due to extreme 
        weather conditions. 
      </p>
      <p class='additional-game-info'>Please direct all questions to:
        Michael Randall, League Coordinator 
      </p>
      <div id='contactInfo' class='additional-game-info'>
        <div id='phone'>Phone: (630) 690-8132</div>
        <div id='email'>Email:
          <a href='mailto:michael.randall@chisoccer.org'>michael.randall@chisoccer.org</a>        
        </div>
      </div>


</div>

</div>

 ) }

       
      

       
       



            
            
          
          


        
             



             


   



    
    

