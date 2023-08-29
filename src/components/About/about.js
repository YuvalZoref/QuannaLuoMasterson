import React from "react";
import './about.css';
import image from '../../assets/logo-q.png';

const About = () => {
  return (
    <section id="about">
      <span className="aboutTitle">About Me</span>
      <span className="aboutDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maxime velit ipsam, doloribus,
        quidem sint ad asperiores officiis repellendus quia facere atque blanditiis est
        labore nam harum quo rerum eum. Quibusdam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime velit ipsam, doloribus,
        quidem sint ad asperiores officiis repellendus quia facere atque blanditiis est
        labore nam harum quo rerum eum. Quibusdam.</span>
      <div className="aboutBars">
        <div className="aboutBar">
          <img src={image} alt="LogoChange" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>TV & film</h2>
            <p>write my own text section here, whatever it may be!
            write my own text section here, whatever it may be!</p>
          </div>
        </div>
        <div className="aboutBar">
          <img src={image} alt="LogoChange" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Stage</h2>
            <p>write my own text section here, whatever it may be!
            write my own text section here, whatever it may be!</p>
          </div>
        </div>
        <div className="aboutBar">
          <img src={image} alt="LogoChange" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Voice over</h2>
            <p>write my own text section here, whatever it may be!
            write my own text section here, whatever it may be!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
