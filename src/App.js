import React from 'react';
import './App.css'; // Imports the CSS file for styling
import Header from './Components/Header/Header'; // Imports the Header component
import FrameImages from './Components/ImagesHost/FrameImages'; // Imports the FrameImages component
import './Theme/Topnav.css'; // Imports additional CSS file
import Section from './Components/Section/Section';
import Navbar from './Components/Navbar/Navbar';
import FlipCard from './Components/FlipCard/FlipCard';
function App() {
  return (
    <div className="App">
      <div className='container'>

        <Navbar></Navbar>
        <FlipCard/>
        {/* <FrameImages /> */}
        {/* <FrameImages /> Renders the FrameImages component */}
        {/* <UploadAndDisplayImage /> This seems to be commented out */}
      </div>
    </div>
  );
}

export default App;
