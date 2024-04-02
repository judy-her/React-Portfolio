import Card from '../components/Card';

import '../styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
  return (
    <section className="pages-container bg-light ">
      <div className="contact-box">
        <h1 className="title text-gradient pb-0">Portfolio</h1>
        {/* <div className="msg-box-2 "> */}
        {/* start of columns */}
        <div className="container ">
          <div className="row justify-content-start">
            <Card
              imageSrc={' ../React-Portfolio/src/assets/images/Regex-gist.png'}
              title={'Project 1'}
              description={'Card body'}
              link={
                'https://gist.github.com/judy-her/d987c36696539b6799928afdc62fe0ff'
              }
            />
            <Card
              imageSrc={' ../React-Portfolio/src/assets/images/Regex-gist.png'}
              title={'Project 1'}
              description={'Card body'}
              link={'githublink'}
            />

            {/* force to break midpoint */}
            <div className="w-100 d-none d-md-block"></div>
            <Card
              imageSrc={' ../React-Portfolio/src/assets/images/Regex-gist.png'}
              title={'Project 1'}
              description={'Card body'}
              link={'githublink'}
            />
            <Card
              imageSrc={' ../React-Portfolio/src/assets/images/Regex-gist.png'}
              title={'Project 1'}
              description={'Card body'}
              link={'githublink'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
