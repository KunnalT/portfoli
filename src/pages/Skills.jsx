import { useState } from "react";
import "./Skills.css";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      id: 1,
      name: "HTML & CSS",
      level: "Intermediate",
      description:
        "Strong knowledge of HTML5 and CSS3 for building responsive and accessible web pages."
    },
    {
      id: 2,
      name: "JavaScript",
      level: "Intermediate",
      description:
        "Good understanding of JavaScript fundamentals including arrays, objects, functions, DOM manipulation, and ES6 features."
    },
    {
      id: 3,
      name: "React",
      level: "Beginner",
      description:
        "Experience in building single-page applications using React, hooks, routing, state management, and component-based architecture."
    },
    {
      id: 4,
      name: "Java",
      level: "Intermediate",
      description:
        "Proficient in Java programming including OOP concepts, data structures, exception handling, and basic algorithms."
    },
    {
      id: 5,
      name: "MySQL",
      level: "Beginner",
      description:
        "Basic knowledge of relational databases, SQL queries, and database design using MySQL."
    }
  ];

  return (
    <section className="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map(skill => (
          <div
            key={skill.id}
            className="skill-card"
            onClick={() => setSelectedSkill(skill)}
          >
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedSkill && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            className="modal"
            onClick={e => e.stopPropagation()}
          >
            <h3>{selectedSkill.name}</h3>
            <p><strong>Level:</strong> {selectedSkill.level}</p>
            <p>{selectedSkill.description}</p>

            <button
              className="close-btn"
              onClick={() => setSelectedSkill(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;
