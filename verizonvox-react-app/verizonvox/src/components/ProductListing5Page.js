import React from 'react';
import './styles.css';

const ProductListing5Page = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/samsung-galaxy-tab-a7lite.png';
  return (
    <div>
        <img src={imageUrl} alt="image 5"/>
        <h5 style={{ fontWeight: 'bold' }}> Samsung Galaxy Tab S7 FE </h5>
    </div>
  );
};

export default ProductListing5Page;