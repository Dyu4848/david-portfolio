import React, { useState } from "react";

function Portfolio() {
  return (
    <div className="portfolio-container">
<div class="wrapper">
    <a href="#car-modal">Read Case Study</a>
</div>
<div id="car-modal" class="car-modal">
    <div className="car__content">
        <h2 className="modal-header">Car Marketplace</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <br></br>
        <div className="car__footer">
            Visit prototype <i class="fa fa-heart"></i>, <a href="https://twitter.com/denicmarko" target="_blank">@denicmarko</a>
        </div>
        <a href="#" className="car__close">&times;</a>
    </div>
</div>
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
      <div className="shoe-store">
        <img className="shoe-main" src="../images/shoe-store.png"></img> 
      </div>
    </div>
  );
}

export default Portfolio;
