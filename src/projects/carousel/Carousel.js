import { useState } from 'react';
import './Carousel.css';

export default function Carousel() {
  const images = [
    "/images/carousel-images/1.jpg",
    "/images/carousel-images/2.jpg",
    "/images/carousel-images/3.jpg",
  ]
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  function leftImg() {
    const nextImgIndex = (currentImgIndex - 1 + images.length) % images.length;
    setCurrentImgIndex(nextImgIndex);
  }

  function rightImg() {
    let nextImgIndex = (currentImgIndex + 1) % images.length;
    setCurrentImgIndex(nextImgIndex);
  }

  return (
    <>
      <h1>Carousel</h1>
      <div className='carousel'>
        <div className='carousel-images'>
          <span className='carousel-left-btn' onClick={leftImg}>{'<'}</span>
          <img src={images[currentImgIndex]} alt='elements' />
          <span className='carousel-right-btn' onClick={rightImg}>{'>'}</span>
        </div>
      </div>
    </>
  )
}