import { FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "NGO Management System",
    description: "Manages donors, volunteers, and events using HTML, CSS, JS, PHP, and MySQL.",
    img: "/Project1.jpg",

    github: "https://github.com/yourusername/ngo-management"
  },
  {
    title: "E-Commerce Website",
    description: "A shopping app similar to Flipkart, built with modern frontend technologies.",
    img: "/Project2.jpg",
    github: "https://github.com/yourusername/ecommerce"
  },
  {
    title: "Medanon",
    description: "A mental health chatbot that provides suggestions and guidance using AI.",
    img: "/Project3.jpg",
    github: "https://github.com/yourusername/medanon"
  }
];

const Projects = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-3">My Projects</h2>
     <section  id="projects">
         <p className="text-center mb-4">
        Here are some of my recent projects — each crafted with a focus on clean code, performance, and user experience.
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.map((project, index) => (
          <div className="col" key={index}>
            <div className="card h-100 shadow-sm project-card">
              <div className="project-img-wrapper">
                <img src={project.img} className="card-img-top" alt={project.title} />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon"
                  title="View on GitHub"
                >
                  <FaGithub size={24} />
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark"
        >
          <FaGithub className="me-2" /> View More on GitHub
        </a>
      </div>
     </section>
    </div>
  );
};

export default Projects;
