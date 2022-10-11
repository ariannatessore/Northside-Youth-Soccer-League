import React from'react';
import {Banner} from './Components/Banner';
import {Navbar} from './Components/Navbar';
import { useData } from './utilities/firebase';
import {Home} from './Components/Home';
import './Styles/nysl.css';





function App() {
  const [game , loading, error] = useData( ); 
  console.log(game,'game')

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the data..</h1>
 
  
  return (
    <div className="App">
      <Banner/>
     
      <Navbar />
     
      <Home/>
      
      
      
    

  
       
      
    
    
       </div>
  );
}

export default App;
