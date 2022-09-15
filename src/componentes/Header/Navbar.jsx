import React from 'react';
import './Navbar.css';
import portfolioBtn from '../../img/header-portfolio-btn.svg';
import tecnologiasBtn from '../../img/header-tecnologias-btn.svg';
import contatoBtn from '../../img/header-contato-btn.svg';
import NavItem from './NavItem';

const Navbar = () => {
  const elementoAnimado = React.useRef();

  React.useEffect(() => {
    elementoAnimado.current.classList.add('Animacao-entrada-300');
  }, []);

  return (
    <nav className='Navbar-container' ref={elementoAnimado}>
      <NavItem 
        img={portfolioBtn}
        alt=''
        href='#Portfolio'
      />
      <NavItem 
        img={tecnologiasBtn}
        alt=''
        href='#Tecnologias'
      />
      <NavItem 
        img={contatoBtn}
        alt=''
        href='#Contato'
      />
    </nav>
  )
}

export default Navbar;
