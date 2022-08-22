import React from 'react';

function NavItem({ img, alt, href }) {
  return (
    <a className='Navbar-anchor' href={href}>
      <img src={img} alt={alt} />
    </a>
  );
}

export default NavItem;
