import React from "react";
import './intro.css';
import background from '../../../assets/q-intro.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="introText"><span className="introName">Quanna</span><br />Luo Masterson</span>
      </div>
      <img src={background} alt="Profile" className="background" />
    </section>
  )
}

export default Intro
