"use client";
import { useState } from "react";
import Replicate from "replicate";
import React from 'react';
import './styles.css';
import Header from './Header.js';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ProductListing1Page = () => {


  const msg = new SpeechSynthesisUtterance();
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const handleSubmit = async (e) => {
    
    /*
    let image_source = e.nativeEvent.target.src;
    let query = image_source.split("?url=")[1];
    query = query.split("&")[0];
    query = query.replaceAll("%2F", "/");
    query = query.replaceAll("%3A", ":");
    */
    let query = "https://i.postimg.cc/gkM73gkt/laptop.png";
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/predictions", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      },
      body: JSON.stringify({
        //image: "https://avatars.githubusercontent.com/u/147882946?v=4"
        //image: "https://replicate.delivery/mgxm/8b4d747d-feca-477d-8069-ee4d5f89ad8e/a_high_detail_shot_of_a_cat_wearing_a_suit_realism_8k_-n_9_.png"
        //image: "https://i.postimg.cc/gkM73gkt/laptop.png"
        //        https%3A%2F%2Fi.postimg.cc%2FgkM73gkt%2Flaptop.png
        image: query,
        prompt: "Describe this contents of this image in the style of a product description. Be concise and limit to 2 sentences."
      }),
    });
    msg.text = "Loading...";
    window.speechSynthesis.speak(msg);
    //console.log(response.json());
    let prediction = await response.json();
    //console.log(prediction);
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log("RESPONSE");
      console.log(prediction.output);
      if (prediction.output != undefined) {
        msg.text = prediction.output;
        window.speechSynthesis.speak(msg);
      }
      console.log({prediction})
      setPrediction(prediction);
    }
    
  };

  const imageUrl = process.env.PUBLIC_URL + '/verizon-product-images/apple-ipad-10th-generation.png';
  const productRightSideDetailsImageUrl = process.env.PUBLIC_URL + '/verizon-product-images/product-pages-right-side.png';
  return (
    <div onClick={handleSubmit}>
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