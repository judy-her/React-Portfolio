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
          className={activePage === '/about' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/portfolio"
          className={
            activePage === '/portfolio' ? 'nav-link active' : 'nav-link'
          }
        >
          Portfolio
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/contact"
          className={activePage === '/contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/resume"
          className={activePage === '/resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
