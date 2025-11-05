import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {currentYear} <span className="footer-highlight">Imad Dahman</span> — Portfolio créé avec React & Vite
      </p>
    </footer>
  );
}

export default Footer;
