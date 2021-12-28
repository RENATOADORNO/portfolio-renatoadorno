import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills'
import Qualification from './components/Qualification';
import Services from './components/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/Contact';
import './css/index.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
