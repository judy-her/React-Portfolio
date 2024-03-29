import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const activePage = useLocation().pathname;
  return (
    <ul className="navbar">
      <li className="nav-item">
        <Link
          to="/"
          className={activePage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/about"
          className={activePage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
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
