import React from'react';
import {Banner} from './Components/Banner';
import {Navbar} from './Components/Navbar';
import { Route,Routes} from "react-router-dom";
import {Home} from './Components/Home';
import './Styles/nysl.css';



function App() {
  return (
    <div className="App">
      <Banner/>
      
      <Navbar />
     
      <Home/>
      
      
      
    

  
       
      
    
    
       </div>
  );
}

export default App;
