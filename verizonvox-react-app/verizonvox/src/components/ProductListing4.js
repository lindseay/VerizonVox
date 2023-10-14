import React from 'react';
import './styles.css';

const ProductListing4 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/razer-edge-5g.png';
  return (
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 4" className= "shrink-image" />
        <h5>RAZER Edge 5G</h5>
        <h6>Retail price: $599.99</h6>
        <h6>3.6/5 stars</h6>
    </div>
  );
};

export default ProductListing4;