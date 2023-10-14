import React from 'react';
import './styles.css';

const ProductListing5 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/samsung-galaxy-tab-a7lite.png';
  return (
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 5" className= "shrink-image" />
    </div>
  );
};

export default ProductListing5;