import '../styles/Experience.css';

const experiences = [
  {
    id: 1,
    title: 'Stagiaire Développeur Web',
    company: 'Service Volontaire International (SVI)',
    location: 'Louvain-la-Neuve',
    date: '05/2025 – 08/2025',
    responsibilities: [
      'Génération automatique des sitemaps XML et optimisation SEO',
        'Mise en place de redirections courtes pour les projets',
        'Développement des données structurées JSON-LD',
        'Intégration Google/Facebook Login (OAuth)',
        'Développement du système d\'inscription et calendrier interactif'
    ]
  },
  {
    id: 2,
    title: 'Développeur Freelance',
    company: 'Indépendant',
    location: 'Bruxelles',
    date: '12/2024 – 02/2025',
    responsibilities: [
      'Application de messagerie sécurisée (HTML, PHP, Java)',
      'Implémentation de chiffrement et gestion MySQL'
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Expérience</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="experience-header">
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-company">{exp.company} — {exp.location}</p>
              <p className="experience-date">{exp.date}</p>
            </div>
            <ul className="experience-description">
              {exp.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
