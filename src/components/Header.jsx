import '../index.css';

import Navbar from './Navbar';
import Footer from './Footer';

function Header() {
  return (
    <section className="container">
      <section className="header gradient-background">
        <section className="header-top_logo">
          <a href="/" className="header-logo text-light">
            LOGO
          </a>
        </section>
        <section className="header-top_navbar text-light">
          <Navbar />
        </section>
      </section>
    </section>
  );
}

export default Header;
