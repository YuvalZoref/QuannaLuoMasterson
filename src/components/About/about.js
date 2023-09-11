import React from "react";
import './about.css';
import film from '../../assets/film-red.png';
import theatre from '../../assets/theatre-red.png';
import voice from '../../assets/voice-red.png';

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
          <img src={film} alt="LogoChange" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>TV & film</h2>
            <p>write my own text section here, whatever it may be!
            write my own text section here, whatever it may be!
            </p>
            <a className="aboutBarLink" href="https://www.michelleblairmanagement.co.uk/quanna-luo-masterson" rel="noreferrer" target="blank"> Click here to see more</a>
          </div>
        </div>
        <div className="aboutBar">
          <img src={theatre} alt="LogoChange" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Stage</h2>
            <p>write my own text section here, whatever it may be!
            write my own text section here, whatever it may be!
            </p>
            <a className="aboutBarLink" href="https://www.spotlight.com/6694-9082-1101" rel="noreferrer" target="blank"> Click here to see more</a>
          </div>
        </div>
        <div className="aboutBar">
          <img src={voice} alt="LogoChange" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>Voice over</h2>
            <p>write my own text section here, whatever it may be!
            write my own text section here, whatever it may be!
            </p>
            <a className="aboutBarLink" href="https://www.sueterryvoices.com/artist/quanna-luo-masterson" rel="noreferrer" target="blank"> Click here to see more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
