import React, { useState } from 'react';
import './FlipCard.css'; // Import CSS file for styling
import FrameImages from '../ImagesHost/FrameImages';
import FrameBlur from '../ImagesHost/FrameBlur';

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <FrameImages/>
        </div>
        <div className="flip-card-back">
          {backContent}
          <FrameBlur />

        </div>
      </div>
    </div>
  );
};

export default FlipCard;
