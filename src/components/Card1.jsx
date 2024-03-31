import ProjectCard from '../components/ProjectCard';
import regexImage from '../assets/images/Regex-gist.png';
import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const card1 = {
  title: 'Regex Tutorial',
  description: 'Regex with Gist',
  image: regexImage,
};

function Card1() {
  return (
    <div>
      <ProjectCard
        title={card1.title}
        description={card1.description}
        image={card1.image}
      />
    </div>
  );
}

export default Card1;
