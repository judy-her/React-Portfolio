// import Section from '../components/Section';
import '../index.css';
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
          <p className="one-of-my text-gradient pb-5">
            One of my winding down go to's is watching British crime mysteries.
            Actually, French, Dutch, German, they're all great. If you want to
            talk about criminology or simply want to chat about coding send me a
            message bellow.
          </p>
          <form className="pt-3">
            <ul className="labels">
              <li>
                <label className="text-right" for="name">
                  Name:
                </label>
                <input type="text" id="name" name="user-name" />
              </li>
              <li>
                <label className="text-right" for="email">
                  Email:
                </label>
                <input type="text" id="email" name="user-email" />
              </li>
            </ul>
            <div className="button-box">
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

/* <div className="section bg-black text-center">
<h2 className="text-center pt-3 fs-1 text-gradient">Contact Me</h2>
<p className="px-5 fs-5 pt-4 text-gradient"> Let's collaborate!</p>
<form className="text-light">
  <label htmlFor="name" className="text-light">
    Name:
  </label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="Enter your name"
  />
  <label htmlFor="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Enter your email"
  />
  <label htmlFor="message">Message:</label>
  <textarea
    id="message"
    name="message"
    rows="4"
    placeholder="Enter your message"
  ></textarea>
  <button type="submit">Submit</button>
</form>
</div> */
