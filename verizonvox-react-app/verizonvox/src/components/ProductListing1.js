import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ProductListing1 = () => {
  const productImageUrl = process.env.PUBLIC_URL + '/verizon-product-images/apple-ipad-10th-generation.png';

    // Function to play the AI description sound 
    const playAIDescriptionSound = () => {
      const AIDescription = new SpeechSynthesisUtterance("The image shows an iPad with a blue background. The iPad has a large screen and appears to be new and unused.");
      window.speechSynthesis.speak(AIDescription);
    };

  return (
    <Link to="/productlisting1page" className="link-no-underline" onClick={playAIDescriptionSound}>
    <div className="rounded-image-container">
        
        <img src={productImageUrl} alt="image 1" className= "shrink-image" />
        <div className="listing-info">
            <h5 style={{ fontWeight: 'bold' }}> Apple iPad (10th Generation) </h5>
            <h6 style={{ color: 'grey' }}>Retail price: $599.99</h6>
            <h6 style={{ color: 'grey' }}>4.6/5 stars</h6>
        </div>
    </div>
    </Link>
  );
};

export default ProductListing1;