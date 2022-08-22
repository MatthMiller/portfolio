import React from 'react';
import './PortfolioTitle.css';
import portfolioTitle from '../../img/portfolio-title.svg';

const PortfolioTitle = () => {
  return (
    <h2 className='PortfolioTitle'>
      <img src={portfolioTitle} alt='Título Portfólio' />
    </h2>
  );
}

export default PortfolioTitle;
