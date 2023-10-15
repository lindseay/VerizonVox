import React from 'react';
import './styles.css';

const ProductListing6Page = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/samsung-galaxy-tab-s85g.png';
  return (
    <div>
        <img src={imageUrl} alt="image 6"/>
        <h5 style={{ fontWeight: 'bold' }}> Samsung Galaxy Tab S8+ 5G </h5>
    </div>
  );
};

export default ProductListing6Page;