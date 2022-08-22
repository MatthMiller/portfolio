import React from 'react';
import IntroducaoTitulo from './IntroducaoTitulo';
import IntroducaoSobreRedes from './IntroducaoSobreRedes';
import './Introducao.css';

const  Introducao = () => {
  return (
    <div className='Introducao-overflow-wrapper'>
      <section className='Introducao-container'>
        <IntroducaoTitulo />
        <div className='Introducao-horizontal-decorator'/>
        <IntroducaoSobreRedes />
      </section>
    </div>
  );
}

export default Introducao;
