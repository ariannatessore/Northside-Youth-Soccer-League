import React from 'react'
import {MapUrl } from '../Components/mapa/MapUrl';
import { useNavigate } from 'react-router-dom';
import { useDataSeptember }  from '../utilities/firebase';

export  const TdDataSeptember =() =>{
  <h1>ciao</h1>
  const navigate = useNavigate()
  const [game , loading, error] = useDataSeptember(); 
   
 

    const handleClickGame = (url) => {
      navigate(url)
     }
     if (error) return <h1>{error}</h1>;
     if (loading) return <h1>Loading the schedule...</h1>
    return game.map((data) => {
      const url = `/septembers/${data.id}`
       return (
        <tbody key={data.id}>
          <tr onClick={() => handleClickGame(url)} style={{ cursor: 'pointer' }}>
         <td >{data.id} </td>
           <td >{data.date}</td>
           <td>{data.teams}</td>
           <td>{data.location}</td>
           <td>{data.time}</td>
           <td><MapUrl url = {data.url}/></td>
         </tr>
        </tbody>
       )
       })
    }