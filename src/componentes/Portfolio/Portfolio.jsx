import React from 'react';
import portfolioTitle from '../../img/portfolio-title.svg';
import styles from './Portfolio.module.css';
import Project from './Project';

// Imagens dos slides
// BMC
import bmc0 from '../../img/slides/bmc/bmc-0.png';
import bmc1 from '../../img/slides/bmc/bmc-1.png';
import bmc2 from '../../img/slides/bmc/bmc-2.png';

const Portfolio = () => {
  return (
    <section className={styles.container} id='Portfolio-container'>
      <h2 className={styles.sectionTitle}>
        <img src={portfolioTitle} alt='Título Portfólio' />
      </h2>

      <div className={styles.divisorLine} style={{ height: '216px' }}></div>

      <Project
        slides={[bmc0, bmc1, bmc2]}
        projectTitle='Front-End/Design - Programa Virtual Notebook'
        slidesTitle='Desenvolvimento Fullstack “Virtual Notebook”'
        detailsDate='Em desenvolvimento desde agosto'
      >
        <p>Software cross-platform feito com o framework JavaScript 
        <span> Electron</span> e a biblioteca <span>React Js</span>.
        Esse projeto foi prototipado através do <span>Figma</span>.</p>
        <p>Foi utilizado o framework <span>Express Js</span> do 
        <span> Node Js</span> para roteamento de <span>API </span>
        e integração com um banco de dados <span>MongoDB</span></p>
      </Project>

      <div className={styles.divisorLine} style={{ height: '216px' }}></div>

      <Project
        slides={[bmc0, bmc1, bmc2]}
        projectTitle='UI/UX Design - Aplicativo de câmbio'
        slidesTitle='Design System Mobile “BMC - Câmbio”'
        detailsDate='nov. à dez. de 2021'
        mobileVersion={true}
      >
        <p>Protótipo de aplicação mobile criado em <span>baixa</span> e <span>alta fidelidade</span>, utilizando o software Figma.</p>
        <p>Foi feito <span>Design System próprio</span> para a empresa, com paleta de cores, variáveis tipográficas e espaçamentos bem definidos.</p>
        <p>Foi utilizado amplamente <span>conceitos de UX</span> e <span>testes de usabilidade</span> durante o seu desenvolvimento</p>
      </Project>
    </section>
  );
}

export default Portfolio;
