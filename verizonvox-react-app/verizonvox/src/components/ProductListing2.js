import React from 'react';
import './styles.css';

const ProductListing2 = () => {
    const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/orbic-airsurf.png';
    return (
      <div className="rounded-image-container">
          <img src={imageUrl} alt="image 2" className= "shrink-image" />
          <h5> Orbic Airsurf 5G UW </h5>
          <h6>Retail price: $699.99</h6>
          <h6>3.9/5 stars</h6>
      </div>
    );
};

export default ProductListing2;