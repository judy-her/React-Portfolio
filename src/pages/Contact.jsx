import Section from '../components/Section';

const contact = {
  title: 'Get in Touch',
  body: 'For more info:',
};

function Contact() {
  return (
    <div className="text-center">
      <Section title={contact.title} body={contact.body} />
    </div>
  );
}
export default Contact;
