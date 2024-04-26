import React from 'react';
import './style.css'; // Import your CSS file for styling

export default function Home() {
  return (
    <div className='homescreen'>
      <div className='home-content'>
        <div align="center" className='home-welcome-text'>
          <h1>WELCOME TO ZENE</h1>
          <h2>EXPERIENCE THE REAL ESSENCE OF MUSIC</h2>
        </div>
        <div align="center" className='cta-section'>
          <h2>Ready to dive into the world of music?</h2>
          <p>Start listening to your favorite tracks now!</p>
          <button className='get-started-button'>Get Started</button>
        </div>
      </div>
    </div>
  );
}
