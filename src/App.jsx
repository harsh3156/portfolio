import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import MouseGradient from './components/MouseGradient';
import Navbar from './components/Navbar';
import Hero from './components/Hero-clean';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';


export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Cursor />
          <MouseGradient />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
