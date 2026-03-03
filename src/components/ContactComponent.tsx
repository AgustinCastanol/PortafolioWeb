import { useRef, type FormEvent, type RefObject } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const ContactComponent: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_v0sxmyg', 'template_bmhbvxl', form.current, '40P4k4I586r-sk3M1');
    }

    e.currentTarget.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>castanolagustin@gmail.com</h5>
            <a href="mailto:castanolagustin@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+5491123914336</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5491123914336"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/*         <form ref={form as RefObject<HTMLFormElement>} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            aria-label="Your Full Name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            aria-label="Your Email"
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
            aria-label="Your Message"
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default ContactComponent;
