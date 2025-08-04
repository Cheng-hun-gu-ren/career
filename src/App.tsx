import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Education />
        <Internships />
        <Projects />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;