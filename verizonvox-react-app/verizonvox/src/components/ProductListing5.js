import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ProductListing5 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/samsung-galaxy-tab-a7lite.png';
    
  // Function to play the AI description sound 
    const playAIDescriptionSound = () => {
        const AIDescription = new SpeechSynthesisUtterance("The image shows a Samsung Galaxy Tab 10.1 tablet with a white background. The device has a thin, sleek design and a 10.1 inch display with a resolution of 2048 x 1536 pixels. The front camera is located at the top of the device, while the rear camera is centered at the back. The device has a USB-C port and a 3.5mm headphone jack on the bottom, and the power button and volume rocker are located on the right side.");
        window.speechSynthesis.speak(AIDescription);
      };

  return (
    <Link to="/productlisting5page" className="link-no-underline" onClick={playAIDescriptionSound}>
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 5" className= "shrink-image-5" />
        <div className="listing-info">
            <h5 style={{ fontWeight: 'bold' }}>Samsung Galaxy Tab S7 FE</h5>
            <h6 style={{ color: 'grey' }}>Retail price: $199.99</h6>
            <h6 style={{ color: 'grey' }}>3.9/5 stars</h6>
        </div>
    </div>
    </Link>
  );
};

export default ProductListing5;