import React from 'react';
import './styles.css';

const ProductListing6 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/samsung-galaxy-tab-s85g.png';
  return (
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 6" className= "shrink-image" />
    </div>
  );
};

export default ProductListing6;