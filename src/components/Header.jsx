import '../index.css';
import '../styles/Header.css';

import Navbar from './Navbar';
import Footer from './Footer';

function Header() {
  return (
    <section className="container">
      <section className="header gradient-background">
        <section className="header-logo">
          <h1 className="logo">Judith</h1>
        </section>
        <section className="header-top_navbar text-light">
          <Navbar />
        </section>
      </section>
    </section>
  );
}

export default Header;
