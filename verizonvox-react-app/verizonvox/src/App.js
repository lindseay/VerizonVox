import React from 'react';
import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <Header />
      {/* Your main app content goes here */}
      <h1>Tablets and Computers</h1>
    </div>
  );
};

export default App;