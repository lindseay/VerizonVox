import React from 'react';
import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductListing1 from './components/ProductListing1.js';
import ProductListing2 from './components/ProductListing2.js';
import ProductListing3 from './components/ProductListing3.js';
import ProductListing4 from './components/ProductListing4.js';
import ProductListing5 from './components/ProductListing5.js';
import ProductListing6 from './components/ProductListing6.js';


const App = () => {
  return (
    <div className="app">
      <Header />
      {/* Your main app content goes here */}
      <div className = "white-section">
        <h1>Tablets and Computers</h1>
      </div>
      <div className="divider"></div>
      <div className = "grey-section">
        <div className = "row-of-products">
          <ProductListing1/>
          <ProductListing2/>
          <ProductListing3/>
        </div>
        <div className = "space-between-rows"></div>
        <div className = "row-of-products">
          <ProductListing4/>
          <ProductListing5/>
          <ProductListing6/>
        </div>
      </div>
    </div>
  );
};

export default App;