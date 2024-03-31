import Section from '../components/Section';
import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// const work = {
//   title: 'Check out my work!',
//   body: 'Here are my projects',
// };

function Portfolio() {
  return (
    <section className="pages-container bg-light ">
      <div className="contact-box">
        <h1 className="title text-gradient">Portfolio</h1>
        <div className="msg-box-2 ">
          {/* start of columns */}
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-6 col-sm-4 card">
                {/* One of two columns */}
                <img
                  className="card-img-top"
                  src=" ../src/assets/images/Regex-gist.png"
                  alt="card image"
                />
                <div className="card-body">
                  <h4 className="card-title text-gradient">Card title</h4>
                  <h5 className="card-text text-gradient">
                    Regex Tutorial with gist
                  </h5>
                  <a href="#" className="btn-git btn-primary">
                    Github
                  </a>
                </div>
              </div>
              {/* ----card 2----- */}
              <div className="col-6 col-sm-4">One of two columns</div>
              {/* force to break midpoint */}
              <div className="w-100 d-none d-md-block"></div>

              <div className="col-6 col-sm-4">One of three columns</div>
              <div className="col-6 col-sm-4">One of four columns</div>
            </div>
          </div>
          {/* end of columns */}
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
