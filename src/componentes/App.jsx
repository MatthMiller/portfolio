import React from 'react';
import Header from './Header/Header';
import Introducao from './Introducao/Introducao';
import Portfolio from './Portfolio/Portfolio';
import './App.css';
import './AnimacoesGerais.css';

const App = () => {
  return (
    <>
      <Header />
      <Introducao />
      <Portfolio />
    </>
  );
}

export default App;
