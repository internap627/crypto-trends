import React from 'react';
import './App.css';
import Nav from './Nav'
import Hero from './Hero'
import Section from './Section';
import {CoinProvider} from './CoinContext'


function App() {
  

  return (
  <CoinProvider>  
    <div className="App">
      <Nav />
      <Hero />
      <Section title={'Winners'}/>
      <Section title={'Losers'}/>
    </div>
  </CoinProvider> 
  );
}

export default App;
