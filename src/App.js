
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Localisation from './Components/Localisation/Localisation';
import Nav from './Components/Nav/Nav';
import Products from './Components/Products/Products';
import Slider from './Components/Slider/Slider';
import { useEffect } from 'react';
import Galerie from './Components/Galerie/Galerie';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <Slider />
    <About />
    <Products />
    <Galerie />
    <Localisation />
    <Contact />
    </>
  );
}

export default App;
