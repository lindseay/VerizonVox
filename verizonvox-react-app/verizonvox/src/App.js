import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// The main Product Page
import ProductPage from './components/ProductPage.js';
// Product Listing component pages 
import ProductListingPage from './components/ProductListingPage.js';

const products = [
  {
    title: "Apple IPAD (10th Generation)", 
    description: "Colorfully reimagined and more versatile than ever. With an all-screen design, 10.9-inch Liquid Retina display1, and four gorgeous colors. iPad delivers a powerful way to create, stay connected, and get things done.",
    image: "/verizon-product-images/apple-ipad-10th-generation.png"
  },
  {
    title: "Orbic Airsurf 5G UW", 
    description: "Introducing the Orbic Airsurf 5G UW, a laptop powered by the Intel ® Core ™ i3 processor, compatible with Verizon’s 5G Ultra Wideband1 network. Offering lightning-fast connectivity without the premium price tag, the Orbic Airsurf 5G UW allows you to enjoy maximum productivity with this sleek, stylish and durable 14.1 touchscreen laptop. And, with long video-playback time and impressive battery life, this laptop will power you through your day, wherever you go.",
    image: "/verizon-product-images/orbic-airsurf.png"
  },
  {
    title: "Orbic Chromebook",
    description: "The Orbic Chromebook is built for how you live, work, and play. This lightweight Chromebook is made for the modern world, featuring instant start-up and internet access in mere moments. This laptop is built with security features in place, meaning it's safe, secure and efficient when working from home or on the go, or when engaging in virtual learning or studying from anywhere. Long battery life1 and always-on capabilities make the Orbic Chromebook a great choice for those on the go, so you don't have to slow down your lifestyle.",
    image: "/verizon-product-images/orbic-chromebook.png"
  },
  {
    title: "RAZER Edge 5G",
    description: "Colorfully reimagined and more versatile than ever. With an all-screen design, 10.9-inch Liquid Retina display1, and four gorgeous colors. iPad delivers a powerful way to create, stay connected, and get things done.",
    image: "/verizon-product-images/razer-edge-5g.png"
  },
  {title: 
    "Samsung Galaxy Tab S7 FE",
    description: "Check out the Samsung Galaxy Tab A7 Lite, a tablet perfectly sized for entertainment on-the-go. The slim body and portable design make it easy to use on-the-go, and the sturdy metal frame keeps it protected against daily wear and tear. You can navigate between apps and store all your media on your tablet thanks to the expandable storage option.1 The long-lasting battery keeps you connected during your busiest days and the fast charging USB-C port helps restore power quickly.2 Turn your Tab A7 Lite into your own personal entertainment hub with One UI technology by connecting multiple Galaxy devices. And now you can pair it with Verizon, the network more people rely on.",
    image: "/verizon-product-images/samsung-galaxy-tab-a7lite.png"
  },
  {title: 
    "Samsung Galaxy Tab S7 FE",
    description: "Check out the Samsung Galaxy Tab A7 Lite, a tablet perfectly sized for entertainment on-the-go. The slim body and portable design make it easy to use on-the-go, and the sturdy metal frame keeps it protected against daily wear and tear. You can navigate between apps and store all your media on your tablet thanks to the expandable storage option.1 The long-lasting battery keeps you connected during your busiest days and the fast charging USB-C port helps restore power quickly.2 Turn your Tab A7 Lite into your own personal entertainment hub with One UI technology by connecting multiple Galaxy devices. And now you can pair it with Verizon, the network more people rely on.",
    image: "/verizon-product-images/samsung-galaxy-tab-s85g.png"
  },
];


const App = () => {
  const msg = useRef(new SpeechSynthesisUtterance());
    msg.current.text = "Welcome to Verizon's Tablets & Laptops product page. Click space to navigate through the contents of the page. Click back to go back to the previous page. Click shift to hear the current audio again.";
  
    useEffect(() => {
      // Function to handle the "Shift" key press
      const handleKeyPress = (event) => {
        if (event.key === 'Shift') {
          // Speak the message again
          window.speechSynthesis.speak(msg.current);
        }
      };
  
      // Add an event listener for "keydown" events on the document
      document.addEventListener('keydown', handleKeyPress);
  
      return () => {
        // Remove the event listener when the component unmounts
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, []); // Empty dependency array for mounting and unmounting only
    

  return (
    <div className="app">
      <Routes>
        <Route path = '/' element={<ProductPage/>} />
        {
          products.map((p, index) => (
            <Route
              key={index}
              path={`/productlisting${index + 1}page`}
              element={
                <ProductListingPage
                  title={p.title}
                  description={p.description}
                  image={p.image}
                />
              }
            />
          ))
        }
      </Routes>
      window.speechSynthesis.speak(msg);
      </div>
  );
};

export default App;