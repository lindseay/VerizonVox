import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// The main Product Page
import ProductPage from './components/ProductPage.js';
// Product Listing component pages 
import ProductListing1Page from './components/ProductListing1Page.js';
import ProductListing2Page from './components/ProductListing2Page.js';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path = '/' element={<ProductPage/>} />
        <Route path='/productlisting1page' element={<ProductListing1Page/>}/>
        <Route path='/productlisting2page' element={<ProductListing2Page/>} />
      </Routes>
      </div>
  );
};

export default App;