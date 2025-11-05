import { useState, useEffect } from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'languages', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}></i>
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <img
            src="/avatar.jpeg"
            alt="Imad Dahman"
            className="profile-image"
          />

          <h1 className="profile-name">Imad Dahman</h1>
          <p className="profile-subtitle">Développeur Full-Stack </p>

          <p className="profile-bio">
          Développeur web passionné avec une approche orientée résultats.
           J’aime transformer les idées en applications modernes, performantes et bien conçues.
           Curieux et motivé, je combine logique et créativité pour concevoir des solutions efficaces,
           aussi bien en front-end qu’en back-end.
          </p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/imad-dahman-4a52b9229/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <i className='bx bxl-linkedin'></i>
            </a>
            <a
              href="https://github.com/imad-dahman"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <i className='bx bxl-github'></i>
            </a>
            <a
              href="mailto:imaddahman434@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <i className='bx bx-envelope'></i>
            </a>
          </div>

          <div className="sidebar-buttons">
            <a
              href="/cv/IMAD-DAHMAN-CV.pdf"
              download
              className="btn btn-primary"
            >
              <i className='bx bx-download'></i> Télécharger CV
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-outline"
            >
              <i className='bx bx-envelope'></i> Contactez-moi
            </button>
          </div>

          <nav className="nav-menu">
            <ul>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills');
                  }}
                  className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                >
                  Compétences
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                  className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('experience');
                  }}
                  className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                >
                  Expérience
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('education');
                  }}
                  className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
                >
                  Formation
                </a>
              </li>
              <li>
                <a
                  href="#languages"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('languages');
                  }}
                  className={`nav-link ${activeSection === 'languages' ? 'active' : ''}`}
                >
                  Langues & Intérêts
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
