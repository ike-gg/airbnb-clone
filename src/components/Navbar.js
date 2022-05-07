import React from 'react';
import airbnbLogo from '../images/airbnb-logo.png';

const Navbar = () => {
  return (
    <nav>
      <img className='nav--logo' src={airbnbLogo} />
    </nav>
  )
}

export default Navbar;