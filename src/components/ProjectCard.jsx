import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCard() {
  return (
    <section className="pages-container bg-light ">
      <div className="contact-box">
        <h1 className="title text-gradient">Portfolio</h1>
        <div className="msg-box ">
          <p className="body-text text-gradient ">
            Hey there! I'm Judith,a Full Stack Web Developer based in Los
            Angeles.
          </p>
          <div className="profile-image-box">
            <img
              className="bio-image"
              src=" ../src/assets/images/Me-pic.png"
              alt="profile image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProjectCard;
