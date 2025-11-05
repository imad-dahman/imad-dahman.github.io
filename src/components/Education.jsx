import '../styles/Education.css';

const education = [
  {
    id: 1,
    degree: 'Bachelier en Informatique de Gestion',
    institution: 'EPFC',
    date: '2021 – 2025'
  },
  {
    id: 2,
    degree: 'Développement Informatique',
    institution: 'Beta Media',
    date: '2018 – 2019'
  },
  {
    id: 3,
    degree: 'Sciences Physiques',
    institution: 'Université Mohammed Premier',
    date: '2014 – 2017'
  }
];

function Education() {
  return (
    <section id="education" className="education">
      <h2>Formation</h2>
      <div className="education-grid">
        {education.map((edu) => (
          <div key={edu.id} className="education-card">
            <i className='bx bxs-graduation education-icon'></i>
            <div className="education-content">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-date">{edu.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
