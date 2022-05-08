import {MdOutlineEmail} from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { LegacyRef} from 'react';

export default function ContactComponent() {
  const form =useRef() as LegacyRef<HTMLFormElement> | undefined;
  let ref:HTMLFormElement
  const sendEmail= (e:any)=>{
  if(form !== null && form !== undefined && ref !== undefined){
    e.preventDefault();
    emailjs.sendForm('service_k9r3xl9','template_bmhbvxl',ref.current,'40P4k4I586r-sk3M1')
  }
  e.target.reset()
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>castanolagustin@gmail.com</h5>
              <a href="mailto:castanolagustin@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+5491123914336</h5>
              <a href="https://api.whatsapp.com/send?phone=5491123914336" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows={7} placeholder="Your Message" required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>)
}