import React from 'react'
import {MapUrl } from '../Components/mapa/MapUrl';
import October from '../utilities/october';

export  const TdDataOctober =() =>{
    const row = Object.values(October);
    console.log(row);
    return row.map((data) => {
       return (
        <tbody>
         <tr>
           
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