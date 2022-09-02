import React from 'react';
import styles from './Tecnologias.modules.css';
import portfolioTitle from '../../portfolio-title.svg';

const Tecnologias = () => {
  return (
    <section className={styles.container} id='Portfolio-container'>
      <h2 className={styles.sectionTitle}>
        <img src={portfolioTitle} alt='Título Portfólio' />
      </h2>
    </section>
  )
}

export default Tecnologias;
