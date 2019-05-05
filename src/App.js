import React from 'react';
import './App.css';
import Nav from './Nav'
import Hero from './Hero'
import Card from './Card';
import {CoinProvider} from './CoinContext'


function App() {
  return (
  <CoinProvider>  
    <div className="App">
      <Nav />
      <Hero />
      <div className='CardGroup'>
        <h2>Winners</h2>
        <Card />
      </div>
      
    </div>
  </CoinProvider> 
  );
}

export default App;
