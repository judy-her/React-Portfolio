import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ imageSrc, title, description, link }) {
  return (
    <div className="col-6 col-sm-4 card">
      <img className="card-img-top" src={imageSrc} alt="project image" />
      <div className="card-body">
        <h4 className="card-title text-gradient">{title}</h4>
        <h5 className="card-text text-gradient">{description}</h5>
        <a href={link} className="btn-git btn-primary">
          Github
        </a>
      </div>
    </div>
  );
}

export default Card;

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
