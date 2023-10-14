import React from 'react';

const Header = () => {
  const headerStyle = {
    background: 'black', // Set the background color to black
    padding: '1.5rem',   // Adjust the padding as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const centerTextStyle = {
    color: 'white',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    fontSize: '1rem',
  };
  
  const spanStyle = {
    marginRight: '0.4in', 
  };

  const signInStyle = {
    color: 'white',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    fontSize: '1rem',
    marginLeft: '300px',
  };

  
  return (
    <nav style={headerStyle}>
      <div className="container">
      <img
          src="/verizon-product-images/verizon-red-icon-black_inPixio.png"
          alt="Verizon Icon"
          style={{ width: '40px', height: '40px' }} // Adjusting the width and height 
          className="mr-3" // Optional Bootstrap margin
        />
        <span className="navbar-brand">hi</span>
        {/* Add navigation links or other content here */}
      </div>
      <div style={centerTextStyle}>
        <span style={spanStyle}>Shop</span>
        <span style={spanStyle}>Why Verizon</span>
        <span style={spanStyle}>Support</span>
      </div>
      <div className="container">
        {      
          <div>
           <span style={signInStyle}>Sign In</span>
          </div>}
      </div>
    </nav>
  );
};

export default Header;