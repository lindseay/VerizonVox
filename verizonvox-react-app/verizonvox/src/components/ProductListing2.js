import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ProductListing2 = () => {
    const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/orbic-airsurf.png';
    return (
    <Link to="/productlisting2page" className="link-no-underline">
      <div className="rounded-image-container">
          <img src={imageUrl} alt="image 2" className= "shrink-image" />
          <div className="listing-info">
            <h5 style={{ fontWeight: 'bold' }}> Orbic Airsurf 5G UW </h5>
            <h6 style={{ color: 'grey' }}>Retail price: $699.99</h6>
            <h6 style={{ color: 'grey' }}>3.9/5 stars</h6>
          </div>
      </div>
      </Link>
    );
};

export default ProductListing2;