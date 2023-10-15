import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ProductListing6 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/samsung-galaxy-tab-s85g.png';
  return (
    <Link to="/productlisting6page" className="link-no-underline">
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 6" className= "shrink-image" />
        <div className="listing-info">
            <h5 style={{ fontWeight: 'bold' }}>Samsung Galaxy Tab S8+ 5G</h5>
            <h6 style={{ color: 'grey' }}>Retail price: $1099.99</h6>
            <h6 style={{ color: 'grey' }}>4.7/5 stars</h6>
        </div>
    </div>
    </Link>
  );
};

export default ProductListing6;