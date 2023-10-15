import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ProductListing3 = () => {
  // Function to play the AI description sound 
      const playAIDescriptionSound = () => {
        const AIDescription = new SpeechSynthesisUtterance("The image shows a laptop with a black exterior and a Google Chrome logo on the screen. The laptop appears to be open and ready for use.");
        window.speechSynthesis.speak(AIDescription);
      };
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/orbic-chromebook.png';
  return (
    <Link to="/productlisting3page" className="link-no-underline" onClick={playAIDescriptionSound}>
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 3" className= "shrink-image" />
        <div className="listing-info">
            <h5 style={{ fontWeight: 'bold' }}>Orbic Chromebook</h5>
            <h6 style={{ color: 'grey' }}>Retail price: $329.99</h6>
            <h6 style={{ color: 'grey' }}>4.0/5 stars</h6>
        </div>
    </div>
    </Link>
  );
};

export default ProductListing3;