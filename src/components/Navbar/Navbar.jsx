import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link, Element } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky,setSticky]=useState(false)
  const [mobileMenu,setMobileMenu]=useState(false)
  const menuRef=useRef(null)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>150 ? setSticky(true) : setSticky(false)
    })
  },[]);
  useEffect(()=>{
    const handleClickOutside=(e)=>{
      if(menuRef.current && !menuRef.current.contains(e.target)){
        setMobileMenu(false);
      }
    };
    if(mobileMenu){
      document.addEventListener('touchstart',handleClickOutside)
    }
    else{
      document.removeEventListener('touchstart',handleClickOutside)
    }
    return ()=> document.removeEventListener('touchstart',handleClickOutside)
  },[mobileMenu]);

  const toggleMenu = ()=>{
      mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'} ref={menuRef}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-250} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-230} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar