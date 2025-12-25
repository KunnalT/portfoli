import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      tech: "React, CSS",
      description:
        "A personal portfolio website built using React. It includes multiple pages, smooth animations, responsive design, and a clean blue-white theme."
    },
    {
      id: 2,
      title: "Todo App",
      tech: "JavaScript",
      description:
        "A simple todo application that allows users to add, delete, and manage tasks efficiently using JavaScript."
    },
    {
      id: 3,
      title: "Student Management System",
      tech: "Java, MySQL",
      description:
        "A system to manage student data including registration, updates, and reports using Java and MySQL."
    },
    {
      id: 4,
      title: "Money Monk",
      tech: "React, MySQL",
      description:
        "It helps a personal financial assistant manage data including registration, updates, and reports using React and MySQL."
    }
  ];

  return (
    <section className="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map(project => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.tech}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal"
            onClick={e => e.stopPropagation()}
          >
            <h3>{selectedProject.title}</h3>
            <p><strong>Technologies:</strong> {selectedProject.tech}</p>
            <p>{selectedProject.description}</p>

            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
