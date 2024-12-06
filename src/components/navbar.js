import React from 'react'
import './navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


// provides navigation
function Navbar() {
  //onst [click, setClick] = useState(false);
  //const [button, setButton] = useState(true);

  //const handleClick = () => setClick(!click);
  //const closeMobileMenu = () => setClick(false);
/*
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  

  window.addEventListener('resize', showButton);
*/

return (
  <nav className='nav'>
    <a href="/">nks</a>
    <ul>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a href="/writing">Writing</a>
      </li>
      <li>
        <a href="/contactme">Say Hi!</a>
      </li>
    </ul>
  </nav>
)
}

/*
  return (
    <>
      <nav className='navbar'>
        <a href="/" className="title">nks</a>
        <div className='navbar-container'>
          <Link to='/' className='navbar-nks-logo' onClick={closeMobileMenu}>
            nks
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className='nav-menu-list'>

            <li className='nav-item'>
              <NavLink 
                to='/' 
                className={({isActive}) => 
                  isActive ? 'nav-links active' : 'nav-links'
                }
                onClick={closeMobileMenu}
                title= 'See Where All the Magic Lives'
                aria-label="Home Page"
                tabIndex={0}
                >
                Home
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to='/resume'
                className={({isActive}) => 
                  isActive ? 'nav-links active' : 'nav-links'
                }
                onClick={closeMobileMenu}
                title= 'See Where the Magic was Built'
                aria-label="Nanki's Resume"
                tabIndex={1}
              >
                Resume
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to='/projects'
                className={({isActive}) => 
                  isActive ? 'nav-links active' : 'nav-links'
                }
                onClick={closeMobileMenu}
                title= 'See the Magic'
                aria-label="Nanki's Projects"
                tabIndex={2}
              >
                Projects
                <i className='fas fa-folder'></i>
              </NavLink>

            </li>

            <li className='nav-item'>
              <NavLink
                to='/writing'
                className={({isActive}) => 
                  isActive ? 'nav-links active' : 'nav-links'
                }
                onClick={closeMobileMenu}
                title= 'See Where the Magic Takes Ahold of a Pen'
                aria-label="Nanki's Writing"
                tabIndex={3}
              >
                Writing
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to='/contactme'
                className={({isActive}) => 
                  isActive ? 'nav-links active' : 'nav-links'
                }
                onClick={closeMobileMenu}
                title= 'Contact the Magic'
                aria-label="Contact Nanki"
                tabIndex={4}
              >
                Say Hi!
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
*/

export default Navbar;