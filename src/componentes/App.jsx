import React from 'react';
import './App.css';
import './AnimacoesGerais.css';
import Header from './Header/Header';
import Introducao from './Introducao/Introducao';
import Portfolio from './Portfolio/Portfolio';
import Tecnologias from './Tecnologias/Tecnologias';
import Contato from './Contato/Contato';

const App = () => {
  return (
    <>
      <Header />
      <Introducao />
      <Portfolio />
      <Tecnologias />
      <Contato />
    </>
  );
}

export default App;
