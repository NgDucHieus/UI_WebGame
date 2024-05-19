import React from 'react';
import test from './test.jpg';
import './FrameBlur.css';

function FrameBlur() {
  return (
    
    <div className="Frame">
      <img src={test} alt="Test" className="Blur"  />
      {/* <span className="Text">Hello World</span> */}
      <div class="centered">Centered</div>
    </div>
  );
}

export default FrameBlur;
