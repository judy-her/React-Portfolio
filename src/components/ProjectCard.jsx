import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCard(props) {
  return (
    <div className="col-6 col-sm-4 card">
      {/* One of two columns */}
      <img className="card-img-top" src={props.image} alt="card image" />
      <div className="card-body">
        <h4 className="card-title text-gradient">{props.title}</h4>
        <h5 className="card-text text-gradient">{props.description}</h5>
        <a href="#" className="btn-git btn-primary">
          Github
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
