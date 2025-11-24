import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/logo-kazispot.png';


const Nav = () => {
  const loc = useLocation();
  return (
    <header className='nav'>
      <div className='nav-inner'>
        <div className='brand'>
          <img className='brand-logo' src={logo} alt='Kazi-Spot Logo' />
          <div className='brand-text'>
            <span className='brand-name'>Kazi-Spot</span>
            <small className='brand-tag'>Eat • Work • Create</small>
          </div>
        </div>
        <nav className='links'>
          <Link className={loc.pathname === '/' ? 'active' : ''} to='/'>Home</Link>
          <Link className={loc.pathname === '/services' ? 'active' : ''} to='/services'>Services</Link>
          <Link className={loc.pathname === '/menu' ? 'active' : ''} to='/menu'>Menu</Link>
          <Link className={loc.pathname === '/hr' ? 'active' : ''} to='/hr'>HR</Link>
          <Link className={loc.pathname === '/contact' ? 'active' : ''} to='/contact'>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
