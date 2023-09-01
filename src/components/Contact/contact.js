import React from "react";
import './contact.css';
import Logo from '../../assets/logo-q.png';
import imdbIcon from '../../assets/imdb.png';
import agentIcon from '../../assets/wechat.png';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';

const Contact = () => {
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
      <span className="contactDescription"> Please feel free to fill out the below form to reach out to me!</span>
      <form className="contactForm">
        <input type="text" className="name" placeholder="Name" />
        <input type="email" className="email" placeholder="Email" />
        <textarea className="message" name="message" rows="5" placeholder="Your Message"></textarea>
        <button type="submit" value='send' className="submitBtn">Submit</button>
        <div className="links">
          <img src={imdbIcon} alt="imdb" className="link" />
          <img src={agentIcon} alt="agent" className="link" />
          <img src={facebookIcon} alt="facebook" className="link" />
          <img src={instagramIcon} alt="instagram" className="link" />
        </div>
      </form>

    </div>
    </section>
  );
}

export default Contact
