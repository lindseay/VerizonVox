import React from 'react';
import './styles.css';

const ProductListing2Page = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/orbic-airsurf.png';
  return (
    <div>
        <img src={imageUrl} alt="image 2"/>
        <h5 style={{ fontWeight: 'bold' }}> Orbic Airsurf 5G UW </h5>
    </div>
  );
};

export default ProductListing2Page;