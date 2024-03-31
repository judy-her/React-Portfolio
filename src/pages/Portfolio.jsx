import Section from '../components/Section';
import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// const work = {
//   title: 'Check out my work!',
//   body: 'Here are my projects',
// };

function Portfolio() {
  return (
    // <div className="text-center">
    //   <Section title={work.title} body={work.body} />
    // </div>
    <section className="pages-container bg-light ">
      <div className="contact-box">
        <h1 className="title text-gradient">Portfolio</h1>
        <div className="msg-box ">
          {/* ----single card--- */}
          <div className="card card-box">
            <img
              className="card-img-top"
              src=" ../src/assets/images/Regex-gist.png"
              alt="card image"
            />
            <div className="card-body">
              <h5 className="card-title text-gradient">Regex</h5>
              <p className="card-text text-gradient">Regex Tutorial</p>
              <a
                href="https://gist.github.com/judy-her/d987c36696539b6799928afdc62fe0ff"
                className="btn btn-primary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
