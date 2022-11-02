import React from 'react';
import { useParams } from "react-router-dom";
import {octobers} from '../utilities/october';
import { MapUrl } from '../components/mapa/MapUrl';
import '../styles/Game.css';






export const OctoberMonth = (props) => {
    let params = useParams();
    console.log(params,'oooo')
    
    const game = octobers.find(october => october.id === params.octoberId)
   
    
    

    if (!game) {
        return <div>Game not found</div>
    }

   return(

    
    <div className='information-one-game'>
      
    <div className='game-team'> {game.teams}</div>
    <div className='game-date'>October {game.date}</div>
    <div className='game-time'> {game.time}</div>
    <div className='game-location'>{game.location}</div>
    <div className='map-url'> <MapUrl url = {game.url}/> </div>
   
    

    </div>

  );
}



       
        
     
 



   
      
        






