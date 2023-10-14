import React from 'react';
import './styles.css';

const ProductListing3 = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/orbic-chromebook.png';
  return (
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 3" className= "shrink-image" />
    </div>
  );
};

export default ProductListing3;