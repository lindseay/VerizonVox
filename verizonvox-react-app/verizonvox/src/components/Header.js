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

  const shoppingBagStyle = {
    color: 'lightgrey', // Set the color to white
    fontSize: '1.5rem', // Adjust the icon size
    marginRight: '50px', // Add some spacing to the right
  };
  
  return (
    <nav style={headerStyle}>
      <div className="container">
      <a href="/"><img
          src="/verizon-product-images/verizon-red-icon-black_inPixio.png"
          alt="Verizon Icon"
          style={{ width: '40px', height: '40px' }} // Adjusting the width and height 
          className="mr-3" // Optional Bootstrap margin
        />
        </a>
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
      <i className="fas fa-shopping-bag" style={shoppingBagStyle}></i> {/* Shopping bag icon */}
    </nav>
  );
};

export default Header;