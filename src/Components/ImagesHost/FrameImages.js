import React from 'react';
import test from './test.jpg';
import './FrameImages.css';

function FrameImages({src}) {
  return (
    
    <div className="Frame">
      <img src={src} alt="Test" className="Img" />
      {/* <span className="Text">Hello World</span> */}
    </div>
  );
}

export default FrameImages;
