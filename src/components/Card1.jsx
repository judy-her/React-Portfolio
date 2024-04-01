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
    <div className="col-6 col-sm-4 card">
      {/* One of two columns */}

      <img
        className="card-img-top"
        src=" ../src/assets/images/Regex-gist.png"
        alt="card image"
      />
      <div className="card-body">
        <h4 className="card-title text-gradient">Card title</h4>
        <h5 className="card-text text-gradient">Regex Tutorial with gist</h5>
        <a href="#" className="btn-git btn-primary">
          Github
        </a>
      </div>
    </div>
  );
}

export default Card1;

// function Portfolio() {
//   return (
//     <section className="pages-container bg-light ">
//       <div className="contact-box">
//         <h1 className="title text-gradient">Portfolio</h1>
//         <div className="msg-box-2 ">
//           <div className="container">
//             <div className="row ">
//               <div>
//                 <Card1 />
//               </div>
//               <Card2 />
//               {/* force to break midpoint */}
//               <div className="w-100 d-none d-md-block"></div>
//               <Card1 />
//               <Card2 />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Portfolio;
