import React from 'react';
import Image1 from './image1';
import Image2 from './image2';
import Image3 from './image3';

const VerificaImg = ({ condition }) => {
  let imageToShow;

  if (condition === 1) {
    imageToShow = <Image1 />;
  } else if (condition === 2) {
    imageToShow = <Image2 />;
  } else if (condition === 3) {
    imageToShow = <Image3 />;
  }

  return imageToShow;
};

export default VerificaImg;
