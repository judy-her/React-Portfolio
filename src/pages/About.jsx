import Section from '../components/Section';

const about = {
  title: 'About Me',
  body: 'Hello I am a full-stack web developer',
};

function About() {
  return (
    <div className="text-center">
      <Section title={about.title} body={about.body} />
    </div>
  );
}

export default About;
