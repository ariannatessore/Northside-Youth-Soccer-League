import React from 'react'
import Table from 'react-bootstrap/Table';
import {TdDataSeptember} from './TabletdSeptember';
import{TdDataOctober} from '../Tabla/TabletdOctober';


      
export default function Tables() {
    
  return (
    <>
 
<div>

<Table  id="tabla" stripped bordered hover variant="dark" size="sm">
  <thead>
    <tr>
      <th width="2000" > September</th>
      <th width="2000" >Teams</th>
      <th width="2000" >Location</th>
      <th width="2000" >Times</th>
      <th width="2000">Map</th>
 
    </tr>
    
  </thead>
  <TdDataSeptember></TdDataSeptember>
  
</Table>

</div>



<Table stripped bordered hover variant="dark" size="sm">
  <thead>
    <tr>
      <th width="2000" >October</th>
      <th width="2000" >Teams</th>
      <th width="2000" >Location</th>
      <th width="2000" >Times</th>
      <th width="2000">Map</th>
 
    </tr>
  </thead>

  <TdDataOctober></TdDataOctober>
  </Table>
 
 

    </>
    
  );
}


