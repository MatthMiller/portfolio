import React from 'react';
import styles from './Project.module.css';
import portfolioBtn from '../../img/portfolio-btn.svg';

const Project = ({ projectTitle, slidesTitle, detailsDate, children }) => {
  return (
    <section>
      <h2 className={styles.projectTitle}>
        {projectTitle}
      </h2>

      <div className={styles.project}>
        <div className={styles.slides}>
          <h3>
            {slidesTitle}
          </h3>
        </div>
        <div className={styles.details}>
          <p className={styles.detailsTitle}>
            <span>+</span> Detalhes
          </p>
          <div className={styles.divisorLine} />
          <div className={styles.detailsCard}>
            <span className={styles.detailsDate}>
              {detailsDate}
            </span>
            {children}
          </div>
          <button className={styles.fullscreenBtn}>
            <img src={portfolioBtn} alt='Ver em tela cheia' />
          </button>
        </div>
    </div>
  </section>
  )
}

export default Project;
