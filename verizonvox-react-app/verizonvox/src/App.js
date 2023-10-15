import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// Product Listing components 
import ProductListing1 from './components/ProductListing1.js';
import ProductListing2 from './components/ProductListing2.js';
import ProductListing3 from './components/ProductListing3.js';
import ProductListing4 from './components/ProductListing4.js';
import ProductListing5 from './components/ProductListing5.js';
import ProductListing6 from './components/ProductListing6.js';
// Product Listing component pages 
import ProductListing1Page from './components/ProductListing1Page.js';
import ProductListing2Page from './components/ProductListing2Page.js';


const App = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selectedIdxRef = useRef(selectedIdx);

  const pictureComponents = [
    <ProductListing1 key={0} isSelected={selectedIdx === 0} name = {"Apple iPad (10th Generation)"} image_directory={"../public/verizon-product-images/apple-ipad-10th-generation.png"}/>,
    <ProductListing2 key={1} isSelected={selectedIdx === 1} name = {"Orbic Airsurf 5G UW"} image_directory={"../public/verizon-product-images/orbic-airsurf.png"}/>,
    <ProductListing3 key={2} isSelected={selectedIdx === 2} name = {"Orbic Chromebook"} image_directory={"../public/verizon-product-images/orbic-chromebook.png"}/>,
    <ProductListing4 key={3} isSelected={selectedIdx === 3} name = {"RAZER Edge 5G"} image_directory={"../public/verizon-product-images/razer-edge-5g.png"}/>,
    <ProductListing5 key={4} isSelected={selectedIdx === 4} name = {"Samsung Galaxy Tab S7 F E"} image_directory={"../public/verizon-product-images/samsung-galaxy-tab-a7lite.png"}/>,
    <ProductListing6 key={5} isSelected={selectedIdx === 5} name = {"Samsung Galaxy Tab S8+ 5G"} image_directory={"../public/verizon-product-images/samsung-galaxy-tab-s85g.png"}/>,
  ];

  useEffect(() => {
    selectedIdxRef.current = selectedIdx;
    const msg = new SpeechSynthesisUtterance();
    msg.text = pictureComponents[selectedIdx].props.name;
    window.speechSynthesis.speak(msg);
  }, [selectedIdx]);

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowRight') {
      // Move to the next item, wrapping around at the end
      setSelectedIdx((selectedIdxRef.current + 1) % pictureComponents.length);
    } else if (event.key === 'ArrowLeft') {
      // Move to the previous item, wrapping around at the beginning
      setSelectedIdx((selectedIdxRef.current - 1 + pictureComponents.length) % pictureComponents.length);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      {/* Your main app content goes here */}
      <div className = "white-section">
        <h1>Tablets and Computers</h1>
      </div>
      <div className="divider"></div>
      <div className = "grey-section">
      <div className="row-of-products">
      {pictureComponents.slice(0, 3).map((component, index) => (
        <div
        key={index}
        className={component.props.isSelected ? 'enlarged-product' : ''}
        >
        {component}
        </div>
        ))}
    </div>
        <div className = "space-between-rows"></div>
        <div className="row-of-products">
        {pictureComponents.slice(-3).map((component, index) => (
        <div
        key={index}
        className={component.props.isSelected  ? 'enlarged-product' : ''}
        >
        {component}
        </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default App;