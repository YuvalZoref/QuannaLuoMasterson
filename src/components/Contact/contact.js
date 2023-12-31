import React, { useRef } from "react";
import './contact.css';
import dumping from '../../assets/work/dumping.jpg';
import police from '../../assets/work/police.PNG'
import mercedes from '../../assets/work/mercedes.png'
import Hennessy2 from '../../assets/work/Hennessy2.jpg';
import Hennessy3 from '../../assets/work/Hennessy3.JPG';
import Hennessy4 from '../../assets/work/Hennessy4.JPEG';
import Hennessy1 from '../../assets/work/Hennessy1.jpg';
import salome from '../../assets/work/salome.jpeg';
import imdbIcon from '../../assets/imdb.png';
import spotlighIcon from '../../assets/spotlight-logo.png';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/insta.png';
import emailjs from '@emailjs/browser';
// import Showreel from '../../assets/work/showreel1.mp4'

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
      Along my journey, I've taken on various roles, from hosting my own TV show to earning a scholarship in the UK for my dedication to the craft. I'm incredibly proud of the path I've walked, and I genuinely feel that my experiences in theatre, TV, and film have allowed me to grow as a performer and connect with audiences in a meaningful way. Thank you for joining me on this adventure!
      </p>
      <div className="workImages">
        <img src={mercedes} alt="" className="workImg" />
        <img src={Hennessy2} alt="" className="workImg" />
        <img src={dumping} alt="" className="workImg" />
        <img src={Hennessy3} alt="" className="workImg" />
        <img src={Hennessy1} alt="" className="workImg" />
        <img src={police} alt="" className="workImg" />
        <img src={salome} alt="" className="workImg" />
        <img src={Hennessy4} alt="" className="workImg" />
        {/* <video loop autoplay="" muted className='showreel'>
          <source src={Showreel} type="video/mp4" />
        </video> */}
      </div>
    </div>
    <div id="contact">
      <h1 className="contactPageTitle">Contact</h1>
      <span className="contactDescription"> Please feel free to fill out the form below to reach out!</span>
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
