import '../styles/Projects.css';

const projects = [
  {
    id: 'tfe',
    title: 'TFE — Application de Gestion de Cabinet Médical',
    image: '/project-tfe.jpg',
    description: 'Application web complète pour cabinets médicaux : rendez-vous, DME, facturation, rappels email/SMS, gestion multi-rôles (médecin, patient, secrétaire).',
    tech: ['React', 'Node.js', 'MySQL', 'Brevo', 'Vonage', 'Railway'],
    codeUrl: 'https://github.com/imad-dahman'
  },
  {
    id: 'forms',
    title: 'PRID — Google Forms Clone (ASP.NET + Angular)',
    image: '/prid.png',
    description: 'Création, partage et analyse de formulaires en ligne avec Angular et ASP.NET Core.',
    tech: ['Angular', 'ASP.NET', 'TypeScript'],
    codeUrl: 'https://github.com/imad-dahman/PRID'
  },
  {
    id: 'sokoban',
    title: 'Jeu Sokoban en JavaFX',
    image: '/project-sokoban.jpg',
    description: 'Jeu de réflexion en Java avec interface JavaFX, gestion des niveaux, collisions et undo.',
    tech: ['Java', 'JavaFX', 'OOP'],
    codeUrl: 'https://github.com/imad-dahman/SOKOBAN_GAME'
  },
  {
    id: 'bank',
    title: 'BANK_ACCOUNT — Application Bancaire en Java',
    image: '/project-bank.jpg',
    description: 'Simulation de compte bancaire avec opérations CRUD, authentification et logique métier en Java.',
    tech: ['Java', 'OOP'],
    codeUrl: 'https://github.com/imad-dahman/BANK_ACCOUNT'
  },
  {
    id: 'tricount-java',
    title: 'Tricount — Application web',
    image: '/project-prwb.jpg',
    description: 'Site dynamique en PHP avec architecture MVC, base de données MySQL et gestion d\'utilisateurs.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    codeUrl: 'https://github.com/imad-dahman/PRWB'
  },
  {
    id: 'tricount-csharp',
    title : 'Tricount — Application C#',
    image : '/project-prbd.jpg',
    description : 'Projet académique visant à créer une application de bureau pour la gestion des dépenses partagées, inspirée de l\'application mobile Tricount. Développée en C# avec Windows Presentation Foundation (WPF) et Entity Framework (EF)',
    tech : ['C#', 'WPF', '.NET', 'Entity Framework'],
    codeUrl: 'https://github.com/imad-dahman/PRBD'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projets</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <i className='bx bx-code-alt'></i>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className='bx bxl-github'></i>
                Voir le code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
