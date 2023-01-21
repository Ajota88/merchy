import { SearchBar, NavButtons } from "../index";
import "./Navbar.scss";
import logo from "../../assets/logo-no-background.svg";
import { navLinks } from "../../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={logo} alt="merchy" className="logo" />
      </div>
      <div className="nav-center">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-right">
        <SearchBar />
        <NavButtons />
      </div>
    </div>
  );
};

export default Navbar;
