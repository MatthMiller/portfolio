import React from 'react';
import styles from './SlideArrow.module.css'

const SlideArrow = ({ fill, left, setActualSlide, setActualIndex, actualIndex, slides}) => {

  const handleClick = () => {
    if (left === false) {
      if (slides[actualIndex + 1] === undefined) {
        // console.log('Próximo slide não existe') 
        // Então... volta pro índice 0, porque está no fim, volta no início
        setActualSlide(slides[0]);
        setActualIndex(0);
      } else {
        setActualSlide(slides[actualIndex + 1])
        setActualIndex(actualIndex + 1);
      }
    }

    if (left === true) {
      if ((actualIndex - 1) === -1) {
        setActualSlide(slides[slides.length - 1]);
        setActualIndex(slides.length - 1);
      } else {
        setActualSlide(slides[actualIndex - 1]);
        setActualIndex(actualIndex - 1);
      }
    }
  }

  return (
    <div
      className={styles.slideArrow}
      onTouchStart={handleClick}
      onClick={handleClick}
    >
      <svg style={left ? {transform: 'rotate(180deg)'} : null}
        width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.2965 18L4.18623 35.2892L0.703079 31.7696L13.9536 18.3513L14.3005 18L13.9536 17.6487L0.703079 4.23038L4.18623 0.710813L21.2965 18Z" fill={fill} stroke="#050505"/>
      </svg>
    </div>
  )
}

export default SlideArrow;
