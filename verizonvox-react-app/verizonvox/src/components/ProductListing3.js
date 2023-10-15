import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ProductListing3 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/orbic-chromebook.png';
  return (
    <Link to="/productlisting3page" className="link-no-underline">
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 3" className= "shrink-image" />
        <div className="listing-info">
            <h5 style={{ fontWeight: 'bold' }}>Orbic Chromebook</h5>
            <h6 style={{ color: 'grey' }}>Retail price: $329.99</h6>
            <h6 style={{ color: 'grey' }}>4.0/5 stars</h6>
        </div>
    </div>
    </Link>
  );
};

export default ProductListing3;