import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT SIDE – TEXT */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a passionate <span>Software Developer</span> focused on
            building clean, responsive, and user-friendly web applications.
            I enjoy working with Java, React and continuously improving
            my skills by building real-world projects.
          </p>

          <p>
            My goal is to become a professional software developer and contribute
            to meaningful products that solve real problems.
          </p>
        </div>

      {/* RIGHT SIDE – INFO CARDS */}
<div className="about-cards">
  <div className="about-card">
    <h3>🎓 Education</h3>
    <p>
      B.Tech in Information Technology <br />
      <span>2022 – 2026</span>
    </p>
  </div>

  <div className="about-card">
    <h3>💻 Experience</h3>
    <p>
      Fresher with hands-on experience in <br />
      <span>Frontend & React Projects</span>
    </p>
  </div>

  <div className="about-card">
    <h3>🚀 Goal</h3>
    <p>
      Aspiring <span>Software Developer</span> <br />
      focused on modern web technologies
    </p>
  </div>
</div>


      </div>
    </section>
  );
}

export default About;
