import React from 'react';
import Navbar from './Navbar';

function App() {
  return (
    <div style={{ backgroundColor: '#EDF0F5', minHeight: '100vh' }}>
      {/* This is your beautiful new sign */}
      <Navbar />
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'sans-serif', color: '#1A1A1B' }}>
          Welcome to the FeedRoad
        </h2>
        <p style={{ color: '#787C7E' }}>The journey through information starts here.</p>
      </div>
    </div>
  );
}

export default App;