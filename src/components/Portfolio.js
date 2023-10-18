import React, { useState } from "react";

function Portfolio() {
  return (
    <div className="portfolio-container">
<div class="car-wrapper">
    <a href="#car-modal">Read Case Study</a>
</div>
<div id="car-modal" class="car-modal">
    <div className="car__content">
        <h2 className="modal-header">Car Marketplace</h2>
        <br></br>
        <p>
          I created this project with the intention to showcase a basic IOS application. This app is a marketplace for concept vehicles listed for preorder sales. I focused on creating a visually aesthetic interface with coordinating color schemes. 
        </p>
        <br></br>
        <div className="car__footer">
            Visit prototype here <i class="fa fa-heart"></i>, <a href="https://www.figma.com/file/bJkHIv7meF8vnjXfgt0zzs/Car-Shop-Project?type=design&node-id=0%3A1&mode=design&t=jqzSGcIto7wauORG-1" target="_blank">Figma Link</a>
        </div>
        <a href="#" className="car__close">&times;</a>
    </div>
</div>
<div className="car-visit"><a target="_blank" href="https://www.figma.com/file/bJkHIv7meF8vnjXfgt0zzs/Car-Shop-Project?type=design&node-id=0%3A1&mode=design&t=jqzSGcIto7wauORG-1">Visit Prototype</a></div>
      <div className="car-shop">
        <img className="car-mock" src="../images/car-shop.png"></img>
        <img className="car-main" src="../images/car-main.png"></img>
      </div>

      <div class="stock-wrapper">
    <a href="#stock-modal">Read Case Study</a>
</div>
<div id="stock-modal" class="stock-modal">
    <div className="stock__content">
        <h2 className="modal-header">Stock Chart</h2>
        <br></br>
        <p>
          This interface is a stock chart that provides the user with a simple interface, allowing the consumers to read their stock progression with all of their relevant information present. I made sure to pick colors that will allow users to be able to clearly distinguish between their positives and negatives. During my wireframing, I made sure to to create sections that would orient the frame in a clean and visually appealing interface.
        </p>
        <br></br>
        <div className="stock__footer">
            Visit prototype here <i class="fa fa-heart"></i>, <a href="https://www.figma.com/file/xboRlfQCcVUDQ6QeZm2H9A/Stock-Project?type=design&node-id=0%3A1&mode=design&t=vr2kIXWsmehxSIIA-1" target="_blank">Figma Link</a>
        </div>
        <a href="#" className="stock__close">&times;</a>
    </div>
</div>
<div className="stock-visit"><a target="_blank" href="https://www.figma.com/file/xboRlfQCcVUDQ6QeZm2H9A/Stock-Project?type=design&node-id=0%3A1&mode=design&t=vr2kIXWsmehxSIIA-1">Visit Prototype</a></div>
      <div className="stock">
        <img className="stock-page" src="../images/stock.png"></img>
      </div>

      <div class="social-wrapper">
    <a href="#social-modal">Read Case Study</a>
</div>
<div id="social-modal" class="social-modal">
    <div className="social__content">
        <h2 className="modal-header">Social Media</h2>
        <br></br>
        <p>
          This IOS app is my take on social media designed for the tech community. For this application, I created a clear and basic interface that allows the user to navigate the application without difficulty. 
        </p>
        <br></br>
        <div className="social__footer">
            Visit prototype here <i class="fa fa-heart"></i>, <a href="https://www.figma.com/file/oZtH3PqmGNphDaY0N2TSGo/Social-Media-Project?type=design&node-id=0%3A1&mode=design&t=9RVwBr6QkmtQcSPi-1" target="_blank">Figma Link</a>
        </div>
        <a href="#" className="social__close">&times;</a>
    </div>
</div>
<div className="social-visit"><a target="_blank" href="https://www.figma.com/file/oZtH3PqmGNphDaY0N2TSGo/Social-Media-Project?type=design&node-id=0%3A1&mode=design&t=9RVwBr6QkmtQcSPi-1">Visit Prototype</a></div>
      <div className="social">
        <img className="social-main" src="../images/social-main.png"></img>
        <img className="social-home" src="../images/social-home.png"></img>
      </div>

      <div class="shoe-wrapper">
    <a href="#shoe-modal">Read Case Study</a>
</div>
<div id="shoe-modal" class="shoe-modal">
    <div className="shoe__content">
        <h2 className="modal-header">Shoe Store</h2>
        <br></br>
        <p>
          This project is an online shoe marketplace that I created in order to showcase some more dynamic and creative design styles. I created the prototype to be able to navigate the entire purchasing process, from checkout to billing.
        </p>
        <br></br>
        <div className="shoe__footer">
            Visit prototype here <i class="fa fa-heart"></i>, <a href="https://www.figma.com/file/FZU7u3xGjIpc6hWnKxPtfA/Shoe-store?type=design&node-id=22%3A522&mode=design&t=PYtFJsIqeAoYogiq-1" target="_blank">Figma Link</a>
        </div>
        <a href="#" className="shoe__close">&times;</a>
    </div>
</div>
<div className="shoe-visit"><a target="_blank" href="https://www.figma.com/file/FZU7u3xGjIpc6hWnKxPtfA/Shoe-store?type=design&node-id=22%3A522&mode=design&t=PYtFJsIqeAoYogiq-1">Visit Prototype</a></div>
      <div className="shoe-store">
        <img className="shoe-main" src="../images/shoe-store.png"></img> 
      </div>
    </div>
  );
}

export default Portfolio;
