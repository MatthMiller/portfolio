import React from 'react';
import './Portfolio.css';
import PortfolioTitle from './PortfolioTitle';
import PortfolioHistoryLine from './PortfolioHistoryLine';

const Portfolio = () => {
  return (
    <section className='Portfolio-container' id='Portfolio-container'>
      <PortfolioTitle />
      <PortfolioHistoryLine height={'216px'} />
    </section>
  );
}

export default Portfolio;
