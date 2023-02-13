import './App.css';
import Activites from './components/Activities';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Presentation from './components/Presentation';

function App() {
  return (
    <div className="App bg-sky-100 overflow-hidden">
      <Hero/>
      <Presentation/>
      <Activites/>
      <Contact/>
    </div>
  );
}

export default App;
