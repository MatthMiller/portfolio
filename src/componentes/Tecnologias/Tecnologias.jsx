import React from 'react';
import styles from './Tecnologias.module.css';
import tecnologiasTitle from '../../img/tecnologias-title.svg';

const FrontEndIcon = ({ color }) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="current" xmlns="http://www.w3.org/2000/svg">
      <path className={styles.icon} d="M13.8788 12.0036L11.4682 10L3 20.2057L11.4682 30.4114L13.8788 28.4079L7.06977 20.2057L13.8788 12.0036ZM12.6735 21.771H15.8041V18.6404H12.6735V21.771ZM28.3265 18.6404H25.1959V21.771H28.3265V18.6404ZM18.9347 21.771H22.0653V18.6404H18.9347V21.771ZM29.5318 10L27.1212 12.0036L33.9302 20.2057L27.1212 28.4079L29.5318 30.4114L38 20.2057L29.5318 10Z" fill={color}/>
    </svg>
  )
}

const DesignIcon = ({ color }) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="current" xmlns="http://www.w3.org/2000/svg">
      <path className={styles.icon} d="M20.5 7C13.5972 7 8 12.5972 8 19.5C8 26.4028 13.5972 32 20.5 32C21.6528 32 22.5833 31.0694 22.5833 29.9167C22.5833 29.375 22.375 28.8889 22.0417 28.5139C21.7222 28.1528 21.5139 27.6667 21.5139 27.1389C21.5139 25.9861 22.4444 25.0556 23.5972 25.0556H26.0556C29.8889 25.0556 33 21.9444 33 18.1111C33 11.9722 27.4028 7 20.5 7ZM12.8611 19.5C11.7083 19.5 10.7778 18.5694 10.7778 17.4167C10.7778 16.2639 11.7083 15.3333 12.8611 15.3333C14.0139 15.3333 14.9444 16.2639 14.9444 17.4167C14.9444 18.5694 14.0139 19.5 12.8611 19.5ZM17.0278 13.9444C15.875 13.9444 14.9444 13.0139 14.9444 11.8611C14.9444 10.7083 15.875 9.77778 17.0278 9.77778C18.1806 9.77778 19.1111 10.7083 19.1111 11.8611C19.1111 13.0139 18.1806 13.9444 17.0278 13.9444ZM23.9722 13.9444C22.8194 13.9444 21.8889 13.0139 21.8889 11.8611C21.8889 10.7083 22.8194 9.77778 23.9722 9.77778C25.125 9.77778 26.0556 10.7083 26.0556 11.8611C26.0556 13.0139 25.125 13.9444 23.9722 13.9444ZM28.1389 19.5C26.9861 19.5 26.0556 18.5694 26.0556 17.4167C26.0556 16.2639 26.9861 15.3333 28.1389 15.3333C29.2917 15.3333 30.2222 16.2639 30.2222 17.4167C30.2222 18.5694 29.2917 19.5 28.1389 19.5Z" fill={color}/>
    </svg>
  )
}

const MoreIcon = ({ color }) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="current" xmlns="http://www.w3.org/2000/svg">
      <path className={styles.icon} d="M19.45 18.735L18.89 19.295V11.42H21.095V19.295L20.535 18.735H28.165V20.8H20.535L21.095 20.24V28.115H18.89V20.24L19.45 20.8H11.82V18.735H19.45Z" fill={color}/>
    </svg>
  )
}

const Tecnologias = () => {
  const [tabTecnologia, setTabTecnologia] = React.useState('front-end');

  return (
    <section className={styles.container} id='Tecnologias'>
      <h2 className={styles.sectionTitle}>
        <img src={tecnologiasTitle} alt='Título Tecnologias' />
      </h2>

      <div className={styles.tabContainer}>
        <div className={styles.tabIconContainer}>
          <label
            className={tabTecnologia === 'front-end' ? `${styles.tabIcon} ${styles.active}` : `${styles.tabIcon}`}
          >
            <input
              type='radio'
              value='front-end'
              checked={tabTecnologia === 'front-end'}
              onChange={({ target }) => setTabTecnologia(target.value)}
            />
            <FrontEndIcon color={tabTecnologia === 'front-end' ? '#E02319' : '#707070'} />
          </label>
          <label
            className={tabTecnologia === 'design' ? `${styles.tabIcon} ${styles.active}` : `${styles.tabIcon}`}
          >
            <input 
              type='radio' 
              value='design'
              checked={tabTecnologia === 'design'}
              onChange={({ target }) => setTabTecnologia(target.value)}
            />
            <DesignIcon color={tabTecnologia === 'design' ? '#E02319' : '#707070'} />
          </label>
          <label
            className={tabTecnologia === 'more' ? `${styles.tabIcon} ${styles.active}` : `${styles.tabIcon}`}
          >
            <input 
              type='radio' 
              value='more'
              checked={tabTecnologia === 'more'}
              onChange={({ target }) => setTabTecnologia(target.value)}
            />
            <MoreIcon color={tabTecnologia === 'more' ? '#E02319' : '#707070'} />
          </label>
        </div>
        
        {tabTecnologia === 'front-end' ?
          <div className={styles.tabContent}>
              <h3 className={styles.tabTitle}>
                <span className={styles.tabTitleText}>
                  <span className={styles.mediumWeight}>Front-end - </span>
                  Linguagens e ferramentas
                </span>
              </h3>
              <ul className={styles.tabList}>
                <li>Programação/Marcação<b>:</b> <span className={styles.itemDescription}>HTML5, CSS, JavaScript ES6, React Js, Electron</span><b>;</b></li>
                <div className={styles.divisorLine} />
                <li>Utilitários<b>:</b><span className={styles.itemDescription}> ESLint, Webpack, Babel, GIT, NPM/Yarn</span><b>;</b></li>
              </ul>
          </div>
        : null}

        {tabTecnologia === 'design' ?
          <div className={styles.tabContent}>
              <h3 className={styles.tabTitle}>
                <span className={styles.tabTitleText}>
                  <span className={styles.mediumWeight}>UI/UX - </span>
                  Ferramentas e abordagem
                </span>
              </h3>
              <ul className={styles.tabList}>
                <li>Softwares de prototipação/edição<b>:</b> <span className={styles.itemDescription}>Figma, Adobe Xd, Adobe Photoshop</span><b>;</b></li>
                <div className={styles.divisorLine} />
                <li>Abordagens<b>:</b><span className={styles.itemDescription}> Criação de design system, Teste A/B</span><b>;</b></li>
              </ul>
          </div>
        : null}

        {tabTecnologia === 'more' ?
          <div className={styles.tabContent}>
            <h3 className={styles.tabTitle}>
              <span className={styles.tabTitleText}>
                <span className={styles.mediumWeight}>Outras linguagens e habilidades
                </span>
              </span>
            </h3>
            <ul className={styles.tabList}>
              <li>Linguagens/bibliotecas back-end<b>:</b> <span className={styles.itemDescription}>Java, Python, Flask, Node js, Express js</span><b>;</b></li>
              <div className={styles.divisorLine} />
              <li>Banco de dados<b>:</b><span className={styles.itemDescription}> MySQL, MongoDB</span><b>;</b></li>
            </ul>
          </div>
        : null}
      </div>

      <div style={{marginBottom: '50px'}}></div>
    </section>
  )
}

export default Tecnologias;
