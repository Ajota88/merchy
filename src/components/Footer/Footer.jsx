import logo from "../../assets/logo-white.svg";
import { navLinks } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo-social">
          <a herf="#">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <nav className="footer-nav">
          <ul role="list" aria-label="footer">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="social-links" role="list" aria-label="social links">
          <li>
            <a href="#" aria-label="facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#" aria-label="gamil">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </li>
          <li>
            <a href="#" aria-label="twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="#" aria-label="instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
      <div></div>
      <div className="copyright">
        <p> &copy; {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
