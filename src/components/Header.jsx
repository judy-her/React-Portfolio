import '../styles/Header.css';
import Navbar from './Navbar';

const styles = {
  headerStyle: {
    background: 'black',
  },
  headingStyle: {
    fontSize: '40px',
  },
};

function Header() {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top_logo">
          <a href="/" className="header-logo">
            LOGO
          </a>
        </section>
        <section className="header-top_navbar">
          <Navbar />
        </section>
      </section>

      <section className="header-bottom">
        <section className="header-bottom_phone">999999999</section>
        <section className="header-bottom_email">shop.info@gmail.com</section>
      </section>
    </section>
  );
}

export default Header;
