import React from 'react';
import styles from './Tecnologias.module.css';
import tecnologiasTitle from '../../img/tecnologias-title.svg';
import { ReactComponent as FrontEndIcon } from '../../img/tab-icon-programming.svg';
import { ReactComponent as DesignIcon } from '../../img/tab-icon-design.svg';
import { ReactComponent as MoreIcon } from '../../img/tab-icon-more.svg';

const Tecnologias = () => {
  return (
    <section className={styles.container} id='Portfolio-container'>
      <h2 className={styles.sectionTitle}>
        <img src={tecnologiasTitle} alt='Título Tecnologias' />
      </h2>

      <div className={styles.tabContainer}>
        <div className={styles.tabIconContainer}>
          <label
            className={styles.tabIcon}>
            {/* Tem que substituir a cor pra 'current' em <path> 
            no arquivo e tirar o opacity 0.5 */}
            <input type='radio' style={{display: 'none'}} />
            <FrontEndIcon fill='#BBBBBB' />
          </label>
          <div className={styles.tabIcon}>
            <DesignIcon fill='#BBBBBB' />
          </div>
          <div className={styles.tabIcon}>
            <MoreIcon fill='#BBBBBB' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tecnologias;
