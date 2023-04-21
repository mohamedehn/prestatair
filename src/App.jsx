import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Form from './components/Form';
import Display from './components/Display';
import ScrollToTop from './components/ScrollToTop';
import DisplayActivities from './components/DisplayActivities';
import Team from './components/Team';
import DataDisplay from './components/Counter';
import { useEffect } from 'react';
import React from 'react';


function App() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className="App bg-[#adccd0] overflow-hidden">
      <Hero/>
      <Presentation/>
      <Team/>
      <DataDisplay/>
      <DisplayActivities/>
      <Display/>
      <Form/>
      <ScrollToTop/>
      <Footer/>
    </div>
  );
}

export default App;
