import React, { useEffect, useState, useRef } from 'react';
import Header from './Header.js';
import ProductListing1 from './ProductListing1.js';
import ProductListing2 from './ProductListing2.js';
import ProductListing3 from './ProductListing3.js';
import ProductListing4 from './ProductListing4.js';
import ProductListing5 from './ProductListing5.js';
import ProductListing6 from './ProductListing6.js';

const ProductPage = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selectedIdxRef = useRef(selectedIdx);
  const msg = new SpeechSynthesisUtterance();

  useEffect(() => {
    selectedIdxRef.current = selectedIdx;
    msg.text = pictureComponents[selectedIdx].props.name;
    window.speechSynthesis.speak(msg);
  }, [selectedIdx]);
  
  const pictureComponents = [
    <ProductListing1 key={0} isSelected={selectedIdx === 0} name={"Apple iPad (10th Generation)"} image_directory={"../public/verizon-product-images/apple-ipad-10th-generation.png"}/>,
    <ProductListing2 key={1} isSelected={selectedIdx === 1} name={"Orbic Airsurf 5G UW"} image_directory={"../public/verizon-product-images/orbic-airsurf.png"}/>,
    <ProductListing3 key={2} isSelected={selectedIdx === 2} name={"Orbic Chromebook"} image_directory={"../public/verizon-product-images/orbic-chromebook.png"}/>,
    <ProductListing4 key={3} isSelected={selectedIdx === 3} name={"RAZER Edge 5G"} image_directory={"../public/verizon-product-images/razer-edge-5g.png"}/>,
    <ProductListing5 key={4} isSelected={selectedIdx === 4} name={"Samsung Galaxy Tab S7 FE"} image_directory={"../public/verizon-product-images/samsung-galaxy-tab-a7lite.png"}/>,
    <ProductListing6 key={5} isSelected={selectedIdx === 5} name={"Samsung Galaxy Tab S8+ 5G"} image_directory={"../public/verizon-product-images/samsung-galaxy-tab-s85g.png"}/>,
  ];

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

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <div>
    <Header />
    <div className="white-section">
      <h1>Tablets and Computers (Click Shift to play instructions for Audio instructions) </h1>
    </div>
    <div className="divider"></div>
    <div className="grey-section">
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
      <div className="space-between-rows"></div>
      <div className="row-of-products">
        {pictureComponents.slice(-3).map((component, index) => (
          <div
            key={index}
            className={component.props.isSelected ? 'enlarged-product' : ''}
          >
            {component}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default ProductPage;
