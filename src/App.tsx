import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import GitHub from '@/components/sections/GitHub';
import Training from '@/components/sections/Training';
import Education from '@/components/sections/Education';
import Certificates from '@/components/sections/Certificates';
import Resume from '@/components/sections/Resume';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <div className={loading ? 'pointer-events-none' : ''}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <GitHub />
          <Training />
          <Education />
          <Certificates />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
