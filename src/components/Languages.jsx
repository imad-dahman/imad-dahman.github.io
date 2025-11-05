import '../styles/Languages.css';

function Languages() {
  const languages = ['Français', 'Anglais', 'Arabe'];

  const interests = [
    'Lectures (technologie & innovation)',
    'Développement web/logiciel, petits projets perso'
  ];

  return (
    <section id="languages" className="languages">
      <h2>Langues & Intérêts</h2>

      <div className="languages-interests-container">
        <div className="languages-card">
          <h3 className="subsection-title">Langues</h3>
          <div className="languages-list">
            {languages.map((language) => (
              <span key={language} className="language-tag">
                {language}
              </span>
            ))}
          </div>
        </div>

        <div className="interests-card">
          <h3 className="subsection-title">Intérêts</h3>
          <ul className="interests-list">
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Languages;
