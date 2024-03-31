import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCard() {
  return (
    // <div className="text-center">
    //   <Section title={work.title} body={work.body} />
    // </div>
    <section className="pages-container bg-light container ">
      <div className="contact-box row align-items-start">
        <h1 className="title text-gradient">Portfolio</h1>
        {/* <div className="text-center">
        <h1 className="title text-gradient ">Portfolio</h1> */}

        {/* ----single card--- */}
        <div className="card-body col-6">
          <div className="img-container">
            <img
              className="card-img-top"
              src=" ../src/assets/images/Regex-gist.png"
              alt="card image"
            />
            <div className="">
              <h5 className="card-title text-gradient">Regex</h5>
              <p className="card-text text-gradient">Regex Tutorial</p>
              <a
                href="https://gist.github.com/judy-her/d987c36696539b6799928afdc62fe0ff"
                className="btn-git "
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* card 2 possibly */}
        <div className="card-body col-6">
          <div className="img-container">
            <img
              className="card-img-top"
              src=" ../src/assets/images/Regex-gist.png"
              alt="card image"
            />
            <div className="">
              <h5 className="card-title text-gradient">Regex</h5>
              <p className="card-text text-gradient">Regex Tutorial</p>
              <a
                href="https://gist.github.com/judy-her/d987c36696539b6799928afdc62fe0ff"
                className="btn-git "
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
export default ProjectCard;
