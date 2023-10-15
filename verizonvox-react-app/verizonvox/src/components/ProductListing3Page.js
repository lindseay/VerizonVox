import React from 'react';
import './styles.css';

const ProductListing3Page = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/orbic-chromebook.png';
  return (
    <div>
        <img src={imageUrl} alt="image 3"/>
        <h5 style={{ fontWeight: 'bold' }}> Orbic Chromebook </h5>
    </div>
  );
};

export default ProductListing3Page;