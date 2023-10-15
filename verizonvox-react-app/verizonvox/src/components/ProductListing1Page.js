import React from 'react';
import './styles.css';
import Header from './Header.js';

const ProductListing1Page = () => {
  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/apple-ipad-10th-generation.png';
  const productRightSideDetailsImageUrl = process.env.PUBLIC_URL + '/verizon-product-images/product-pages-right-side.png';
  return (
    <div>
        <Header/>
        <h1 style={{ fontWeight: 'bold' }}> Apple IPAD (10th Generation) </h1>
        <div className = "horizontal">
        <img src={imageUrl} alt="image 1" className="product-page-image"/>
        <img src={productRightSideDetailsImageUrl} className = "product-page-right-side-image"/>
        </div>
        <div className="horizontal-divider"></div>
        <h6 className="product-page-description">Colorfully reimagined and more versatile than ever. With an all-screen design, 10.9-inch Liquid Retina display1, and four gorgeous colors. iPad delivers a powerful way to create, stay connected, and get things done.</h6>
    </div>
  );
};

export default ProductListing1Page;