import React from 'react';
import './Logo.css';

const Logo = () => {
  const elementoAnimado = React.useRef();

  React.useEffect(() => {
    elementoAnimado.current.classList.add('Animacao-entrada-300');
  }, []);

  return (
    <a href="./" ref={elementoAnimado}>
      <h1 className='Header-logo'>
        <span>{'<'}</span>
          MatheusMonteiro
        <span>{' />'}</span>
      </h1>
    </a>
  );
}

export default Logo;
