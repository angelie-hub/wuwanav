import '../design/Projects.css';
import artp from '../assets/artportfolio.png';
import loading from '../assets/loadingproj.png';
import mdgs from '../assets/mangdurugas.png';
import epic from '../assets/epic.png';
import se from '../assets/studentenrollment.png';
import sp from '../assets/finalsproj.png';

const hoverSound = new Audio(process.env.PUBLIC_URL + "../assets/hover.wav");
const clickSound = new Audio(process.env.PUBLIC_URL + "/transition.wav");

// Preload sounds to ensure they are ready for playback
hoverSound.preload = 'auto';
clickSound.preload = 'auto';

const featuredProjects = [
  {
    title: "Art Portfolio Site",
    image: artp,
    link: "https://ginnmzn-artportfolio.netlify.app/",
    description: "My art portfolio showcasing different kinds of drawings I've made over the years.",
  },
  {
    title: "Loading/Userlists Site",
    image: loading,
    link: "https://loading-userlists.netlify.app/",
    description: "A Genshin-themed userlists site that lets you create and delete your own lists.",
  },
  {
    title: "Mang-Durugas",
    image: mdgs,
    link: "https://mangdurugas.netlify.app/",
    description: "A manga website with a working API.",
  },
];

const oldProjects = [
  {
    title: "Responsive Website",
    image: epic,
    link: "https://angelie-hub.github.io/responsive_website/",
    description: "An Epic themed responsive website I made on January 31, 2025.",
  },
  {
    title: "Student Enrollment System",
    image: se,
    link: "https://angelie-hub.github.io/studentenrollment/",
    description: "A Student Enrollment System website I made on November 22, 2024.",
  },
  {
    title: "Self Porfolio Website",
    image: sp,
    link: "https://angelie-hub.github.io/FINALS_PELEC/",
    description: "A website I made as a finals project in my major subject.",
  },
];

const Projects = () => {
  // Debounced hover sound to avoid rapid re-triggering
  let hoverTimeout = null;
  
  const handleHover = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout); // Clear any previous hover triggers
    hoverTimeout = setTimeout(() => {
      hoverSound.currentTime = 0;  // Ensure sound plays from the start
      hoverSound.play();
    }, 100); // Delay to avoid rapid triggering on hover
  };

  const handleClick = () => {
    clickSound.currentTime = 0;
    clickSound.play();
  };

  return (
    <div className="projects-container">
      <section className="projects-section">
        <h2 className="projects-heading">FEATURED PROJECTS</h2>
        <div className="projects-grid">
          {featuredProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              onMouseEnter={handleHover}
              onClick={handleClick}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <hr className="projects-divider" />

      <section className="projects-section">
        <h2 className="projects-heading">OLD PROJECTS</h2>
        <div className="projects-grid">
          {oldProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              onMouseEnter={handleHover}
              onClick={handleClick}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
