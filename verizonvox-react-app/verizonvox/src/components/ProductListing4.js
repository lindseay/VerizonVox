import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ProductListing4 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/razer-edge-5g.png';
  return (
    <Link to="/productlisting4page" className="link-no-underline">
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 4" className= "shrink-image" />
        <div className="listing-info">
            <h5 style={{ fontWeight: 'bold' }}>RAZER Edge 5G</h5>
            <h6 style={{ color: 'grey' }}>Retail price: $599.99</h6>
            <h6 style={{ color: 'grey' }}>3.6/5 stars</h6>
        </div>
    </div>
    </Link>
  );
};

export default ProductListing4;