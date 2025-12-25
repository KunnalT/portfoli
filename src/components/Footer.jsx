import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">Follow me on</p>

      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/kunnal-t-7a69032ba"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/KunnalT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a href="mailto:kunnaltharani510@gmail.com">
          <FaEnvelope />
        </a>

        <a
          href="https://www.instagram.com/_kunxal__"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Kunnal. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
