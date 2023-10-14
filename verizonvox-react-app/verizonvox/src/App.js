import React from 'react';
import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductListing1 from './components/ProductListing1.js';


const App = () => {
  return (
    <div className="app">
      <Header />
      {/* Your main app content goes here */}
      <div className = "white-section">
        <h1>Tablets and Computers</h1>
      </div>
      <div className = "grey-section">
        <div className="divider"></div>
        <ProductListing1/>
      </div>
    </div>
  );
};

export default App;