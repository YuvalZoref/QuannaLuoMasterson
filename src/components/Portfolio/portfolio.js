import React from 'react';
import './portfolio.css';
import Portfolio1 from '../../assets/q2.jpg';
import Portfolio2 from '../../assets/q3.jpg';
import Portfolio3 from '../../assets/q4.jpg';
import Portfolio4 from '../../assets/q5.jpg';
import Portfolio5 from '../../assets/q6.jpg';
import Portfolio6 from '../../assets/q9.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className='portfolioTitle'>My Portfolio</h2>
      <span className='portfolioDescription'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maxime velit ipsam, doloribus,
        quidem sint ad asperiores officiis repellendus quia facere atque blanditiis est
        labore nam harum quo rerum eum. Quibusdam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime velit ipsam, doloribus,
        quidem sint ad asperiores officiis repellendus quia facere atque blanditiis est
        labore nam harum quo rerum eum. Quibusdam.
      </span>
      <div className="portfolioImages">
        <img src={Portfolio1} alt="" className="portfolioImg" />
        <img src={Portfolio2} alt="" className="portfolioImg" />
        <img src={Portfolio3} alt="" className="portfolioImg" />
        <img src={Portfolio4} alt="" className="portfolioImg" />
        <img src={Portfolio5} alt="" className="portfolioImg" />
        <img src={Portfolio6} alt="" className="portfolioImg" />
      </div>
      <a href='https://www.michelleblairmanagement.co.uk/quanna-luo-masterson'rel="noreferrer" target="blank">
        <button className="portfolioBtn">See more</button>
      </a>
    </section>
  )
}

export default Portfolio
