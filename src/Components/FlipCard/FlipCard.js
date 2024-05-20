import React, { useState } from 'react';
import './FlipCard.css'; // Import CSS file for styling
import FrameImages from '../ImagesHost/FrameImages';
import test from '../ImagesHost/test.jpg';

const FlipCard = ({ frontContent, backContent,src }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={src} alt="Test" className="Img" />
        </div>
        <div className="flip-card-back">
          
          <div className='blur_background'> 
            <img src={src} alt="Test" className="Img" />
          </div>
          <div className="overlay"></div>

          <div class="centered" >Centered</div>

        </div>
      </div>
    </div>
  );
};

export default FlipCard;
