import React, {useState} from 'react'
import './navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


// provides navigation
function Navbar() {

return (
  <nav className='nav'>
    <Link to="/" className="site-title">nks</Link>
    <ul>
      <CustomLink to="/projects">Projects</CustomLink>
      <CustomLink to="/writing">Writing</CustomLink>
      <CustomLink to="/resume">Resume</CustomLink>
      <CustomLink to="/contactme">Say Hi!</CustomLink>
    </ul>
  </nav>
)
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true});
  return (
  <li className={isActive ? 'active' : ''}>
        <Link to={to}{...props}>{children}</Link>
  </li>
  )
}

export default Navbar;