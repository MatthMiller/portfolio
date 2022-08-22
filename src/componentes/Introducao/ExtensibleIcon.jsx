import React from 'react';
import ExtendedIconText from './ExtendedIconText';
import './ExtensibleIcon.css';

const ExtensibleIcon = ({ icon, alt, text, href }) => {
  const [iconExtendido, setIconExtendido] = React.useState(false);

  const handleMouseOver = () => {
    setIconExtendido(true);
  }

  const handleMouseOut = () => {
    setIconExtendido(false);
  }

  return (
    <div
      className='ExtensibleIcon'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {/* <img src={isExtended ? esseicone : esseoutroicone} /> */}
      <img 
        className={iconExtendido ? 'extended' : ''}
        src={iconExtendido ? icon[1] : icon[0]}
        alt={alt} />
      {iconExtendido ? <ExtendedIconText text={text} href={href} /> : null}
    </div>
  );
}

export default ExtensibleIcon;
