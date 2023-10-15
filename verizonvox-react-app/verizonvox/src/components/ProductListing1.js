import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ProductListing1 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/apple-ipad-10th-generation.png';
  return (
    <Link to="/productlisting1page" className="link-no-underline">
    <div className="rounded-image-container">
        
        <img src={imageUrl} alt="image 1" className= "shrink-image" />
        <div className="listing-info">
            <h5 style={{ fontWeight: 'bold' }}> Apple iPad (10th Generation) </h5>
            <h6 style={{ color: 'grey' }}>Retail price: $599.99</h6>
            <h6 style={{ color: 'grey' }}>4.6/5 stars</h6>
        </div>
    </div>
    </Link>
  );
};

export default ProductListing1;