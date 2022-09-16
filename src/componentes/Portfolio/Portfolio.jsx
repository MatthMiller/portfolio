import React from 'react';
import portfolioTitle from '../../img/portfolio-title.svg';
import styles from './Portfolio.module.css';
import Project from './Project';

// Imagens dos slides
// Virtual Notebook
import virtualnotebook0 from '../../img/slides/virtualnotebook/virtualnotebook-0.png';
import virtualnotebook1 from '../../img/slides/virtualnotebook/virtualnotebook-1.png';
// BMC
import bmc0 from '../../img/slides/bmc/bmc-0.png';
import bmc1 from '../../img/slides/bmc/bmc-1.png';
import bmc2 from '../../img/slides/bmc/bmc-2.png';
// TemVagas
import temvagas0 from '../../img/slides/temvagas/temvagas-0.png';
import temvagas1 from '../../img/slides/temvagas/temvagas-1.png';
import temvagas2 from '../../img/slides/temvagas/temvagas-2.png';
import temvagas3 from '../../img/slides/temvagas/temvagas-3.png';
import temvagas4 from '../../img/slides/temvagas/temvagas-4.png';
import temvagas5 from '../../img/slides/temvagas/temvagas-5.png';

const Portfolio = () => {
  return (
    <section className={styles.container} id='Portfolio'>
      <h2 className={styles.sectionTitle}>
        <img src={portfolioTitle} alt='Título Portfólio' />
      </h2>

      <div className={styles.divisorLine} style={{ height: '216px' }}></div>

      <Project
        slides={[virtualnotebook0, virtualnotebook1]}
        projectTitle='Front-End/Design - Programa Virtual Notebook'
        slidesTitle='Desenvolvimento Fullstack “Virtual Notebook”'
        detailsDate='Em desenvolvimento desde agosto'
      >
        <p>Software desktop cross-platform feito com o framework JavaScript 
        <span> Electron</span> e a biblioteca <span>React Js</span>.
        Esse projeto foi prototipado através do <span>Figma</span>.</p>
        <p>Foi utilizado o framework <span>Express Js</span> do 
        <span> Node Js</span> para roteamento de <span>API </span>
        e integração com um banco de dados <span>MongoDB</span></p>
      </Project>

      <div className={styles.divisorLine} style={{ height: '216px' }}></div>

      <Project
        slides={[temvagas0, temvagas1, temvagas2, temvagas3, temvagas4, temvagas5]}
        projectTitle='UI/UX Design - Dashboard e site de empregos'
        slidesTitle='Design System Responsivo “TemVagas”'
        detailsDate='fev. à mar. de 2022'
        mobileVersion={false}
      >
        <p>Protótipo de aplicação mobile criado em <span>baixa</span> e <span>alta fidelidade</span>, utilizando o software Figma.</p>
        <p>Foi feito <span>Design System próprio</span> para a empresa, com paleta de cores, variáveis tipográficas e espaçamentos bem definidos.</p>
        <p>Foi utilizado amplamente <span>conceitos de UX</span> e <span>testes de usabilidade</span> durante o seu desenvolvimento</p>
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

      <div className={styles.divisorLine} style={{ height: '216px', marginBottom: '15px' }}></div>
      <div className={styles.divisorLineEnd}/>
    </section>
  );
}

export default Portfolio;
