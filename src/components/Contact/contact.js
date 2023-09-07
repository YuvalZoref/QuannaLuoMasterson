import React, { useRef } from "react";
import './contact.css';
import Logo from '../../assets/logo-q.png';
import imdbIcon from '../../assets/imdb.png';
import spotlighIcon from '../../assets/spotlight-logo.png';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/insta.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h5l8lsr', 'template_byuh181', form.current, 'BO1InNRzxnajdYbua')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent!')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contactPage">
    <div id="work">
      <h1 className="contactPageTitle">My Work</h1>
      <p className="workDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maxime velit ipsam, doloribus,
        quidem sint ad asperiores officiis repellendus quia facere atque blanditiis est
        labore nam harum quo rerum eum. Quibusdam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime velit ipsam, doloribus,
        quidem sint ad asperiores officiis repellendus quia facere atque blanditiis est
        labore nam harum quo rerum eum. Quibusdam.
      </p>
      <div className="workImages">
        <img src={Logo} alt="" className="workImg" />
        <img src={Logo} alt="" className="workImg" />
        <img src={Logo} alt="" className="workImg" />
        <img src={Logo} alt="" className="workImg" />
      </div>
    </div>
    <div id="contact">
      <h1 className="contactPageTitle">Contact</h1>
      <span className="contactDescription"> Please feel free to fill out the form below to reach out to me!</span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Name" name='from_name' />
        <input type="email" className="email" placeholder="Email" name='from_email' />
        <textarea className="message" name="message" rows="5" placeholder="Your Message"></textarea>
        <button type="submit" value='send' className="submitBtn">Submit</button>
        <div className="links">
          <a href="https://www.imdb.com/name/nm9973363/?ref_=ext_shr_lnk" rel="noreferrer" target="blank"><img src={imdbIcon} alt="imdb" className="link" /></a>
          <a href="https://www.spotlight.com/6694-9082-1101" rel="noreferrer" target="blank"><img src={spotlighIcon} alt="agent" className="link" /></a>
          <a href="https://www.imdb.com/name/nm9973363/?ref_=ext_shr_lnk" rel="noreferrer" target="blank"><img src={facebookIcon} alt="facebook" className="link" /></a>
          <a href="https://www.instagram.com/quanna_l/" rel="noreferrer" target="blank"><img src={instagramIcon} alt="instagram" className="link" /></a>
        </div>
      </form>

    </div>
    </section>
  );
}

export default Contact
