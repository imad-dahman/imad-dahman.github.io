import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <div className="job-search-message">
        <div className="message-icon">
          <i className='bx bx-briefcase'></i>
        </div>
        <p>
  Je suis actuellement à la recherche d’un poste en développement web, qu’il soit front-end, back-end ou full-stack.
  Passionné par la création d’applications modernes et utiles, je souhaite rejoindre une équipe dynamique
  où je pourrai continuer à apprendre, partager mes compétences et contribuer à des projets concrets.
</p>

      </div>

      <div className="contact-content">
        <div className="contact-direct">
          <h3>Envoyez-moi un email</h3>
          <a href="mailto:imaddahman434@gmail.com" className="email-link">
            <i className='bx bx-envelope'></i>
            imaddahman434@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
