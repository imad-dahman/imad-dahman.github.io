import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto' }}>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Languages />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
