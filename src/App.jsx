import './App.css';
import Activites from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Presentation from './components/Presentation';


function App() {
  return (
    <div className="App bg-sky-100 overflow-hidden">
      <Hero/>
      <Presentation/>
      <Activites/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
