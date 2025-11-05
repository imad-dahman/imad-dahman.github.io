import '../styles/Skills.css';

const skillsData = {
  'Front-End': [
    { name: 'HTML', icon: 'bxl-html5' },
    { name: 'CSS', icon: 'bxl-css3' },
    { name: 'JavaScript', icon: 'bxl-javascript' },
    { name: 'React', icon: 'bxl-react' },
    { name: 'Angular', icon: 'bxl-angular' },
    { name: 'jQuery', icon: 'bxl-jquery' },
    { name: 'Bootstrap', icon: 'bxl-bootstrap' },
    { name: 'AJAX', icon: 'bx-code-curly' }
  ],
  'Back-End': [
    { name: 'Node.js', icon: 'bxl-nodejs' },
    { name: 'ASP.NET', icon: 'bxl-microsoft' },
    { name: 'C#', icon: 'bx-code-block' },
    { name: 'Java', icon: 'bxl-java' },
    { name: 'PHP', icon: 'bxl-php' },
    { name: 'MySQL', icon: 'bx-data' },
    { name: 'Entity Framework', icon: 'bx-cylinder' },
    { name: 'REST API', icon: 'bx-server' },
    { name: 'JSON', icon: 'bx-code-curly' }
  ],
  'Outils & API': [
    { name: 'Git', icon: 'bxl-git' },
    { name: 'GitHub', icon: 'bxl-github' },
    { name: 'Railway', icon: 'bx-train' },
    { name: 'Stripe API', icon: 'bxl-stripe' },
    { name: 'PayPal API', icon: 'bxl-paypal' },
    { name: 'Vonage', icon: 'bx-message-dots' },
    { name: 'Brevo', icon: 'bx-envelope' },
    { name: 'OAuth', icon: 'bx-lock-alt' },
    { name: 'API Facebook', icon: 'bxl-facebook' },
    { name: 'API Google', icon: 'bxl-google' }
  ],
  'Autres': [
    { name: 'SEO', icon: 'bx-search-alt' },
    { name: 'Administration réseau', icon: 'bx-network-chart' },
    { name: 'SAP', icon: 'bx-box' },
    { name: 'MVC', icon: 'bx-cube-alt' },
    { name: 'MVVM', icon: 'bx-layer' }
  ]
};

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Compétences</h2>

      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="skills-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <i className={`bx ${skill.icon} skill-icon`}></i>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
