import React from 'react';
import Header from './Header/Header';
import Introducao from './Introducao/Introducao';
import Portfolio from './Portfolio/Portfolio';
import './App.css';
import './AnimacoesGerais.css';
import Tecnologias from './Tecnologias/Tecnologias';

const App = () => {
  return (
    <>
      <Header />
      <Introducao />
      <Portfolio />
      <Tecnologias />
    </>
  );
}

export default App;
