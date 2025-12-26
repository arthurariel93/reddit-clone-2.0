import React from 'react';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 40px',
      backgroundColor: '#FFFFFF',
      borderBottom: '2px solid #004a99',
      fontFamily: 'sans-serif'
    }}>
      {/* The Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ 
          backgroundColor: '#004a99', 
          width: '35px', 
          height: '35px', 
          borderRadius: '6px', 
          marginRight: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#FFD700', 
          fontWeight: 'bold'
        }}>F</div>
        <span style={{ color: '#1A1A1B', fontWeight: '800', fontSize: '24px' }}>
          Feed<span style={{ color: '#004a99' }}>Road</span>
        </span>
      </div>

      {/* The Search Bar */}
      <input 
        type="text" 
        placeholder="Search the FeedRoad..." 
        style={{
          backgroundColor: '#f6f7f8',
          border: '1px solid #ccc',
          borderRadius: '20px',
          padding: '10px 20px',
          width: '40%'
        }} 
      />

      {/* The Button */}
      <button style={{
        padding: '8px 20px',
        borderRadius: '20px',
        border: '2px solid #004a99',
        color: '#004a99',
        backgroundColor: 'transparent',
        fontWeight: 'bold'
      }}>Enter Road</button>
    </nav>
  );
}

export default Navbar;