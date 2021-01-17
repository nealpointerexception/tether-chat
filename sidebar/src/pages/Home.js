  
import React from 'react';
import VisNetwork from '../components/Graph';
import { MyPlanet } from '../components/Planet';

function Home() {
  return (
    <div id='mynetwork'>
      <body>
        <VisNetwork />
      </body>          
      <MyPlanet/>
    </div>
    
  );
}

export default Home;