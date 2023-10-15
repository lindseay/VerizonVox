import React from 'react';
import './styles.css';

const ProductListing1Page = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/apple-ipad-10th-generation.png';
  return (
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 1" className= "shrink-image" />
        <div className="listing-info">
            <h5 style={{ fontWeight: 'bold' }}> Apple iPad (10th Generation) </h5>
            <h6 style={{ color: 'grey' }}>Retail price: $599.99</h6>
            <h6 style={{ color: 'grey' }}>4.6/5 stars</h6>
        </div>
    </div>
  );
};

export default ProductListing1;