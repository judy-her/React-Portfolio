import ProjectCard from '../components/ProjectCard';
import passwordImage from '../assets/images/generate-password.png';
import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const card2 = {
  title: 'Password Generator',
  description: 'Randomized',
  image: passwordImage,
};

function Card2() {
  return (
    <div>
      <ProjectCard
        title={card2.title}
        description={card2.description}
        image={card2.image}
      />
    </div>
  );
}
export default Card2;
