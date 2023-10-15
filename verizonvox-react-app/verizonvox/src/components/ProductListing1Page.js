import React from 'react';
import './styles.css';

const ProductListing1Page = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/apple-ipad-10th-generation.png';
  return (
    <div>
        <img src={imageUrl} alt="image 1"/>
        <h5 style={{ fontWeight: 'bold' }}> Apple IPAD (10th Generation) </h5>
    </div>
  );
};

export default ProductListing1Page;