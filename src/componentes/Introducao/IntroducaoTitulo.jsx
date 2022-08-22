import React from 'react';
import './IntroducaoTitulo.css';
import ReactSpinner from '../../img/react-red-spin.svg';

function IntroducaoTitulo() {
  const elementoAnimado = React.useRef();

  React.useEffect(() => {
    elementoAnimado.current.classList.add('Animacao-entrada-500');
  }, []);

  return (
    <div className='Introducao-titulo-spinner-wrapper' ref={elementoAnimado}>
      <h2 className='Introducao-titulo'>
        UI/UX Designer
        <span className='Linear-Gradient-Red-1-Text'> &</span><br/>
        Desenvolvedor<br/>
        Front-End<span className='Linear-Gradient-Red-1-Text'>.</span>
      </h2>
      <img
        className='Introducao-spinner'
        src={ReactSpinner}
        alt='React Js Red Spinner'
        height='130px'
      />
    </div>
  );
}

export default IntroducaoTitulo;
