import React from 'react';
import styles from './Project.module.css';
import portfolioBtn from '../../img/portfolio-btn.svg';

const Project = ({ projectTitle, slidesTitle, slides, detailsDate, children }) => {
  console.log(slides);

  const [actualSlide, setActualSlide] = React.useState('' + slides[0]);
  console.log(slides, actualSlide);

  return (
    <section>
      <h2 className={styles.projectTitle}>
        {projectTitle}
      </h2>

      <div className={styles.project}>
        <div className={styles.slides}>
          <h3 className={styles.slidesTitle}>
            {slidesTitle}
          </h3>
          <div className={styles.slideContainer}>
            <img
              className={styles.slide}
              src={actualSlide}
              alt='Slide'
            />
          </div>
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
