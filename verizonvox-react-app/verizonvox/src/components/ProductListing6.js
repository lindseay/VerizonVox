import React from 'react';
import './styles.css';

const ProductListing6 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/samsung-galaxy-tab-s85g.png';
  return (
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 6" className= "shrink-image" />
        <h5>Samsung Galaxy Tab S8+ 5G</h5>
        <h6>Retail price: $1099.99</h6>
        <h6>4.7/5 stars</h6>
    </div>
  );
};

export default ProductListing6;