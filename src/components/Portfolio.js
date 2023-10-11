import React, { useState } from "react";

function Portfolio() {
  return (
    <div className="portfolio-container">
        <p className="car-shop-text">Case Study: Concept Car Shop</p>
      <div className="car-shop">
        <img className="car-mock" src="../images/car-shop.png"></img>
        <img className="car-main" src="../images/car-main.png"></img>
      </div>
      <div className="stock">
        <img className="stock-page" src="../images/stock.png"></img>
      </div>
      <div className="social">
        <img className="social-main" src="../images/social-main.png"></img>
        <img className="social-home" src="../images/social-home.png"></img>
      </div>
    </div>
  );
}

export default Portfolio;
