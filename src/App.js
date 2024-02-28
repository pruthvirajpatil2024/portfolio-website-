import React from 'react'
import Header from './components/Header.js'
import Skills from './components/Skills.js'
import Nav from './components/Nav.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import About from './components/About.js'
import './App.css'

function App() {
  document.title = "Pruthviraj Patil | Portfolio";
  return (
    <div className="App">
      <Header />
      <Nav />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
