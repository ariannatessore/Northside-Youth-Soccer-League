import React from 'react'
import septembers from '../utilities/septembers';
import { useParams } from "react-router-dom";
import { MapUrl } from '../Components/mapa/MapUrl';

export const SeptemberMonth = () => {
    let params = useParams();
    console.log(params,'oooo')
    console.log(septembers,'daviiii')
    const game = septembers.find(september => september.id === params.septemberId)
    
    

    if (!game) {
        return <div>Game not found33</div>
    }

   return(
    <div className='information-one-game'>
    <div className='game-team'> {game.teams}</div>
    <div className='game-date'> september {game.date}</div>
    <div className='game-time'> {game.time}</div>
    <div className='game-location'>{game.location}</div>
    <div className='map-url'> <MapUrl url = {game.url}/> </div>
   
    

    </div>

  );
}