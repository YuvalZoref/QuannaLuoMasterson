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
        Hello, I'm Quanna, and it's a pleasure to open up and share a bit of my journey with you. I've had the incredible opportunity to portray Eileen in CHIMERICA, all thanks to the talented Amy Hubbard who cast me. Being fluent in English, Mandarin, and Cantonese has allowed me to seamlessly bridge different cultures in my work.
        My upbringing in Shanghai, Hong Kong, and Shenzhen exposed me to diverse cultures and languages from a very young age. My mother, a professional ballroom dancer, instilled in me a deep love for the arts. I had the privilege of attending a prestigious professional dance school in China, where I received meticulous training in various dance forms and academy classes that emphasized precision and discipline.
        My heart truly belongs to martial arts, especially Kung Fu and Taekwondo. I've also delved into the world of ballet and jazz. These experiences have been instrumental in allowing me to bring authenticity, physicality, and grace to my performances.
      </span>
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
