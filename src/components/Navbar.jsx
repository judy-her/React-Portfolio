import '../styles/Navbar.css';

function Navbar() {
  return (
    <section className="navbar">
      <a href="/" className="nav-item">
        Home
      </a>
      <a href="/about" className="nav-item">
        About Me
      </a>
      <a href="/portfolio" className="nav-item">
        Portfolio
      </a>
      <a href="/contact" className="nav-item">
        Contact
      </a>
      <a href="/resume" className="nav-item">
        Resume
      </a>
    </section>
  );
}

export default Navbar;
