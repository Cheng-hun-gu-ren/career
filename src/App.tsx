import React from 'react';
import { LanguageProvider } from './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VisibilityGate from './components/VisibilityGate';

function App() {
  return (
    <LanguageProvider>
      <VisibilityGate>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Hero />
            <Projects />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </div>
      </VisibilityGate>
    </LanguageProvider>
  );
}

export default App;
