import React from 'react';
import './styles.css';

const ProductListing1 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/apple-ipad-10th-generation.png';
  return (
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 1" className= "shrink-image" />
        <h5> Apple iPad (10th Generation) </h5>
        <h6>Retail price: $599.99</h6>
        <h6>4.6/5 stars</h6>
    </div>
  );
};

export default ProductListing1;