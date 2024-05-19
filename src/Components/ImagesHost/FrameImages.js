import React from 'react';
import test from './test.jpg';
import './FrameImages.css';

function FrameImages() {
  return (
    
    <div className="Frame">
      <img src={test} alt="Test" className="Img" />
      {/* <span className="Text">Hello World</span> */}
    </div>
  );
}

export default FrameImages;
