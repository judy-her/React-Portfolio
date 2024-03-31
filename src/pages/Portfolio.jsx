import Card1 from '../components/Card1';
import Card2 from '../components/Card2';

import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
  return (
    <section className="pages-container bg-light ">
      <div className="contact-box">
        <h1 className="title text-gradient">Portfolio</h1>
        <div className="msg-box-2 ">
          <div className="container">
            <div className="row ">
              <div>
                <Card1 />
              </div>
              <Card2 />
              {/* force to break midpoint */}
              <div className="w-100 d-none d-md-block"></div>
              <Card1 />
              <Card2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
