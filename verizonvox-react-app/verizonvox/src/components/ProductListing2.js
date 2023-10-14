import React from 'react';
import './styles.css';

const ProductListing2 = () => {
    const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/orbic-airsurf.png';
    return (
      <div className="rounded-image-container">
          <img src={imageUrl} alt="image 2" className= "shrink-image" />
      </div>
    );
};

export default ProductListing2;