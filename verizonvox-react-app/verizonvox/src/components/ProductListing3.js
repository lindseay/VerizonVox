import React from 'react';
import './styles.css';

const ProductListing3 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/orbic-chromebook.png';
  return (
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 3" className= "shrink-image" />
        <h5>Orbic Chromebook</h5>
        <h6>Retail price: $329.99</h6>
        <h6>4.0/5 stars</h6>
    </div>
  );
};

export default ProductListing3;