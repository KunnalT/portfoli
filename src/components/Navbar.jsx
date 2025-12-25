import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO / NAME */}
        <div className="nav-logo">
          <Link to="/">Kunnal</Link>
        </div>

        {/* NAV LINKS */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
