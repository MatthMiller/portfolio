import React from 'react';
import styles from './Project.module.css';
import portfolioBtn from '../../img/portfolio-btn.svg';
import SlideArrow from '../../img/SlideArrow';


const Project = ({ projectTitle, slidesTitle, slides, detailsDate, mobileVersion, children }) => {
  const [actualIndex, setActualIndex] = React.useState(0)
  const [actualSlide, setActualSlide] = React.useState(slides[actualIndex]);
  const [slideFullscreen, setSlideFullscreen] = React.useState(null);

  const openModal = () => {
    setSlideFullscreen(true);
  }
  
  const closeModal = ({ target }) => {
    if (target.id === 'foraModal') {
      setSlideFullscreen(null);
    }
  }

  return (
    <section className={styles.projectContainer}>
      <h2 className={styles.projectTitle}>
        {projectTitle}
      </h2>

      <div className={styles.project}>
        <div className={styles.slides}>
          <h3 className={styles.slidesTitle}>
            {slidesTitle}
          </h3>
          <div className={styles.slideContainer}>
            <SlideArrow
              left={true}
              fill={'#EFEFEF'}
              setActualIndex={setActualIndex}
              actualIndex={actualIndex}
              setActualSlide={setActualSlide}
              slides={slides}
            />
            <img
              className={styles.slide}
              src={actualSlide}
              alt='Slide'
            />
            <SlideArrow
              left={false}
              fill={'#EFEFEF'}
              setActualIndex={setActualIndex}
              actualIndex={actualIndex}
              setActualSlide={setActualSlide}
              slides={slides}
            />
          </div>
          <div className={styles.slideProgressContainer}>
            {[...slides].map((element, index) => (
              <>
                <div 
                  key={index}
                  className={index === actualIndex ?
                    `${styles.slideProgressBall} ${styles.ballFilled}` : 
                    styles.slideProgressBall}
                />
                {mobileVersion ? 
                <div
                  key={index}
                  className={index === actualIndex ?
                    `${styles.slideProgressBall} ${styles.ballFilled}` : 
                    styles.slideProgressBall}
                />
              : null}
              </>
            ))}
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
            <img 
              src={portfolioBtn} 
              alt='Ver em tela cheia'
              onClick={openModal}
            />
          </button>
        </div>
    </div>

    {slideFullscreen ?
      <div 
        onClick={closeModal}
        className={styles.modalContainer}
        id='foraModal'
      >
        <div className={styles.modal}>
          <div className={styles.slides}>
            <div className={mobileVersion ? `${styles.slideContainer} ${styles.isMobile}` 
            : `${styles.slideContainer}`}>
              <SlideArrow
                left={true}
                fill={'#EFEFEF'}
                setActualIndex={setActualIndex}
                actualIndex={actualIndex}
                setActualSlide={setActualSlide}
                slides={slides}
              />
              <img
                className={styles.slide}
                src={actualSlide}
                alt='Slide'
              />
              <SlideArrow
                left={false}
                fill={'#EFEFEF'}
                setActualIndex={setActualIndex}
                actualIndex={actualIndex}
                setActualSlide={setActualSlide}
                slides={slides}
              />
            </div>
            <div className={styles.slideProgressContainer}>
              {[...slides].map((element, index) => (
                <>
                  <div 
                    key={index}
                    className={index === actualIndex ?
                      `${styles.slideProgressBall} ${styles.ballFilled}` : 
                      styles.slideProgressBall}
                  />
                  {mobileVersion ? 
                  <div
                    key={index}
                    className={index === actualIndex ?
                      `${styles.slideProgressBall} ${styles.ballFilled}` : 
                      styles.slideProgressBall}
                  />
                : null}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    : null}
  </section>
  )
}

export default Project;
