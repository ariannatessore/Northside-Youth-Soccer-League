import React from 'react'
import {MapUrl } from '../Components/mapa/MapUrl';
import septembers from '../utilities/septembers';

export  const TdDataSeptember =() =>{
    const row = Object.values(septembers);
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