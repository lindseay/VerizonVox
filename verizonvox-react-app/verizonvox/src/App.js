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
import ProductListing3Page from './components/ProductListing3Page.js';
import ProductListing4Page from './components/ProductListing4Page.js';
import ProductListing5Page from './components/ProductListing5Page.js';
import ProductListing6Page from './components/ProductListing6Page.js';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path = '/' element={<ProductPage/>} />
        <Route path='/productlisting1page' element={<ProductListing1Page/>}/>
        <Route path='/productlisting2page' element={<ProductListing2Page/>} />
        <Route path='/productlisting3page' element={<ProductListing3Page/>} />
        <Route path='/productlisting4page' element={<ProductListing4Page/>} />
        <Route path='/productlisting5page' element={<ProductListing5Page/>} />
        <Route path='/productlisting6page' element={<ProductListing6Page/>} />
      </Routes>
      </div>
  );
};

export default App;