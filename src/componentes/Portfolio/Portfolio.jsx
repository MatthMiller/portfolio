import React from 'react';
import portfolioTitle from '../../img/portfolio-title.svg';
import styles from './Portfolio.module.css';
import Project from './Project';

const Portfolio = () => {
  return (
    <section className={styles.container} id='Portfolio-container'>
      <h2 className={styles.sectionTitle}>
        <img src={portfolioTitle} alt='Título Portfólio' />
      </h2>

      <div className={styles.divisorLine} style={{ height: '216px' }}></div>

      <Project
        slides={[]}
        projectTitle='UI/UX Design - Aplicativo de câmbio'
        slidesTitle='Design System Mobile “BMC - Câmbio”'
        detailsDate='nov. à dez. de 2021'
      >
        <p>Protótipo de aplicação mobile criado em <span>baixa</span> e <span>alta fidelidade</span>, utilizando o software Figma.</p>
        <p>Também possuindo um <span>Design System próprio</span> para a empresa, com paleta de cores, variáveis tipográficas, e espaçamentos bem definidos.</p>
        <p>Foi utilizado amplamente <span>conceitos de UX</span> e <span>testes de usabilidade</span> durante o seu desenvolvimento</p>
      </Project>
    </section>
  );
}

export default Portfolio;
