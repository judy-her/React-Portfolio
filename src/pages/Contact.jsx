// import Section from '../components/Section';
// import '../index.css';
import '../styles/Contact.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// const contact = {
//   title: 'Get in Touch',
//   body: 'For more info:',
//   form: 'enter name',
// };

function Contact() {
  return (
    <section className="contact-me-container bg-light ">
      <div className="contact-box">
        <h1 className="get-in-touch-title text-gradient">Get In Touch</h1>
        <div className="last-msg-box ">
          <p className="one-of-my text-gradient ">
            One of my winding down go to's is watching British crime mysteries.
            Actually, French, Dutch, German, they're all great. If you want to
            talk about criminology or simply want to chat about coding send me a
            message bellow.
          </p>
          <form className="pt-3">
            <ul className="labels">
              <li>
                <label className="text-right name">Name:</label>
                <input type="text" placeholder="name" className="text-dark" />
              </li>
              <li>
                <label className="text-right email ">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="user-email"
                  placeholder="email"
                />
              </li>
              <li>
                <label className="text-right message">Message:</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="your message"
                ></textarea>
              </li>
            </ul>
            <div className="button-box ">
              <button className="btn" type="submit">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
