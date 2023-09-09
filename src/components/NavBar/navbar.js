import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo-q2.png';
import contactImg from '../../assets/email.png';
import { Link } from 'react-scroll';
import menu from '../../assets/burger-menu2.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo'/>
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Work</Link>
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact me</button>

        <img src={menu} alt="menu" className='mobileMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Work</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
