import React from 'react';
import './App.css'; // Imports the CSS file for styling
import './Theme/Topnav.css'; // Imports additional CSS file
import Navbar from './Components/Navbar/Navbar';
import FlipCard from './Components/FlipCard/FlipCard';
import test from '../src/Components/ImagesHost/test.jpg'
function App() {
  return (
    <div className="App">
      <div className='container'>

        <Navbar></Navbar>
        <div className="flip-card-container">
          <FlipCard src={test} />
          <FlipCard src={test}/>
          <FlipCard src={test}/>
          <FlipCard src={test}/>

        </div>
        {/* <FrameImages /> */}
        {/* <FrameImages /> Renders the FrameImages component */}
        {/* <UploadAndDisplayImage /> This seems to be commented out */}
      </div>
    </div>
  );
}

export default App;
