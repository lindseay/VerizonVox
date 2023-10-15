import React from 'react';
import './styles.css';

const ProductListing4Page = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/razer-edge-5g.png';
  return (
    <div>
        <img src={imageUrl} alt="image 4"/>
        <h5 style={{ fontWeight: 'bold' }}> Razer EDGE 5G </h5>
    </div>
  );
};

export default ProductListing4Page;