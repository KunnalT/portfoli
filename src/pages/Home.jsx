import "./Home.css";
import myPhoto from "../assets/myphoto.png"; // add your photo here
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-content">

        {/* LEFT SIDE */}
        <div className="home-text">
          <h1>Hello, I'm <span>Kunnal</span></h1>
          <h2>Frontend & Software Developer</h2>
          <p>
            I am a Software Developer who enjoys building modern web application
            s using React and JavaScript. I like solving problems, learning new technologies, 
            and creating user-friendly interfaces. My goal is to continuously improve my skills and work on meaningful software projects.
          </p>

        </div>
         <Link to="/contact">
  <button className="home-btn">Let's Talk</button>
</Link>

        {/* RIGHT SIDE */}
        <div className="home-image">
          <img src={myPhoto} alt="My Profile" />
        </div>

      </div>
    </section>
  );
}

export default Home;
