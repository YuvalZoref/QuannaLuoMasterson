import React from "react";
import './contact.css';
import Logo from '../../assets/logo-q.png';

const Contact = () => {
  return (
    <section className="contactPage">
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

    </div>
    </section>
  );
}

export default Contact
