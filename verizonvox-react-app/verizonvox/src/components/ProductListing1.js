import React from 'react';
import './styles.css'

const ProductListing1 = () => {
    const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/apple-ipad-10th-generation.png';
  return (
    <div className="rounded-image-container">
        <img src={imageUrl} alt="image 1" className= "shrink-image" />
    </div>
  );
};

export default ProductListing1;