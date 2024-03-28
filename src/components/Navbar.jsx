import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <ul className="navbar">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>

      <li className="nav-item">
        <Link to="/about">About Me</Link>
      </li>

      <li className="nav-item">
        <Link to="/portfolio">Portfolio</Link>
      </li>

      <li className="nav-item">
        <Link to="/contact">Contact</Link>
      </li>

      <li className="nav-item">
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  );
}

export default Navbar;
