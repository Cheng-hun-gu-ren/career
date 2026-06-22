import React from 'react';
import { LanguageProvider } from './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VisibilityGate from './components/VisibilityGate';

function App() {
  return (
    <LanguageProvider>
      <VisibilityGate>
        <div className="min-h-screen bg-paper text-ink">
          <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-gradient-to-r from-forest via-amber-brand to-slate-brand" />
          <Header />
          <main>
            <Hero />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </VisibilityGate>
    </LanguageProvider>
  );
}

export default App;