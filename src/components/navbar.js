import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Button} from './button';
import './navbar.css';


function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click); {/*Sets to opposite of click value*/}
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    }
    else {
      setButton(true)
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <nav className='navbar'>
      <div className='navbar container'>
        <Link to="/" className="navbar-logo">
          TRVL <i className='fab fa typo3'/>
        </Link>
        <div className='.menu-icon' onClick={handleClick}>  {/*Hamburger Menu Icon*/}
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
          Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
          About Me
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/codingprojects' className='nav-links' onClick={closeMobileMenu}>
          Coding Projects
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/Writing' className='nav-links' onClick={closeMobileMenu}>
          Writing
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/Design' className='nav-links' onClick={closeMobileMenu}>
          Design
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
          Sign Up
          </Link>
        </li>
        </ul>
        {button && <Button buttonStyle='btn--outline' buttonSize='btn--medium'>Sign Up</Button>}
      </div>
    </nav>
  )
}

export default NavBar