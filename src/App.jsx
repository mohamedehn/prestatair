import './App.css';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Form from './components/Form';
import Display from './components/Display';
// import CardActivites from './components/CardActivities';
import ScrollToTop from './components/ScrollToTop';
import DisplayActivities from './components/DisplayActivities';

function App() {
  return (
    <div className="App bg-[#adccd0] overflow-hidden">
      <Hero/>
      <Presentation/>
      <DisplayActivities/>
      {/* <CardActivites/> */}
      <Display/>
      {/* <Contact/> */}
      <Form/>
      <ScrollToTop/>
      <Footer/>
    </div>
  );
}

export default App;
