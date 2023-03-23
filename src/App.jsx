import './App.css';
// import Activites from './components/Activities';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Form from './components/Form';
import Display from './components/Display';
import CardActivites from './components/CardActivities';

function App() {
  return (
    <div className="App bg-sky-100 overflow-hidden">
      <Hero/>
      <Presentation/>
      {/* <Activites/> */}
      <CardActivites/>
      <Display/>
      {/* <Contact/> */}
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
