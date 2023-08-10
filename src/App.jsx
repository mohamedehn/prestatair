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
import React, { useEffect } from 'react';
import PopUpCookies from './components/PopUpCookies';


const App = () => {

  // pour appeler le serveur au chargement de la page et récupérer la response et les données (data)
  useEffect(() => {
    fetch("/")
    .then((res)=> res.json())
    .then((data)=> {console.log(data)})
  },[])

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className="App bg-[#adccd0] overflow-hidden">
      <Hero/>
      <PopUpCookies/>
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
