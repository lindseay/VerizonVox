import React from 'react';
import './styles.css';

const ProductListing4 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/razer-edge-5g.png';
  return (
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 4" className= "shrink-image" />
    </div>
  );
};

export default ProductListing4;