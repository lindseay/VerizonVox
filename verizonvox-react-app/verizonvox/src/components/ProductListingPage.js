import React from 'react';
import './styles.css';
import Header from './Header.js';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const ProductListing1Page = (props) => {

  const {title, description, image } = props;

  const productRightSideDetailsImageUrl = process.env.PUBLIC_URL + '/verizon-product-images/product-pages-right-side.png';
  return (
    <div>
        <Header/>
        <h1 style={{ fontWeight: 'bold' }}> { title } </h1>
        <div className = "horizontal">
        <img src={image} alt="image 1" className="product-page-image"/>
        <img src={productRightSideDetailsImageUrl} className = "product-page-right-side-image"/>
        </div>
        <div className="horizontal-divider"></div>
        <h6 className="product-page-description">{ description }</h6>
    </div>
  );
};

export default ProductListing1Page;