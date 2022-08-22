import React from 'react';
import './ExtendedIconText.css';

const ExtendedIconText = ({ text, href }) => {

  if (href) {
    return (
      <div className='ExtendedIconText'>
        <a href={href} target='_blank' rel="noreferrer">
          {text}
        </a>
      </div>
    );
  }

  return (
    <div className='ExtendedIconText'>
      <p>
        {text}
      </p>
    </div>
  );
}

export default ExtendedIconText;
