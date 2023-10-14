import React from 'react';
import './styles.css';

const ProductListing5 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/samsung-galaxy-tab-a7lite.png';
  return (
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 5" className= "shrink-image" />
        <h5>Samsung Galaxy Tab S7 FE 5G</h5>
        <h6>Retail price: $199.99</h6>
        <h6>3.9/5 stars</h6>
    </div>
  );
};

export default ProductListing5;