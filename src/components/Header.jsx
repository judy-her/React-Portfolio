import '../styles/Header.css';

const styles = {
  headerStyles: {
    background: 'blue',
  },
  headingStyle: {
    fontSize: '40px',
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Judith's Portfolio</h1>
    </header>
  );
}

export default Header;
