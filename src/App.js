import React from'react';
import {Banner} from './Components/Banner';
import {Navbarr} from './Components/Navbar';
import { useData } from './utilities/firebase';
import {Home} from './Components/Home';
import './Styles/nysl.css';





function App() {
  const [game , loading, error] = useData(); 
  console.log(game,'game222')

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the data..</h1>
 
  
  return (
    <div className="App">
      <Banner/>
     
      <Navbarr />
     
      <Home/>
      
      
      
    

  
       
      
    
    
       </div>
  );
}

export default App;
