import '../styles/Footer.css';

const styles = {
  footerStyle: {
    background: 'black',
  },
};

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <h2>Footer</h2>
    </footer>
  );
}

export default Footer;
