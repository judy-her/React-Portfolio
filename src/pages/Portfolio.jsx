import Section from '../components/Section';

const work = {
  title: 'Check out my work!',
  body: 'Here are my projects',
};

function Portfolio() {
  return (
    <div className="text-center">
      <Section title={work.title} body={work.body} />
    </div>
  );
}
export default Portfolio;
