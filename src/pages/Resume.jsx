import Section from '../components/Section';

const resume = {
  title: 'My resume',
  body: 'Edudation, Work Experience',
};

function Resume() {
  return (
    <div className="text-center">
      <Section title={resume.title} body={resume.body} />
    </div>
  );
}
export default Resume;
