import React from 'react';
import '/src/App.css'; // Make sure the path is correct based on your project structure

const Home = () => {
  return (
    <div className="home">
      <div className="bottomContainer">
        <div className="cardsContainer"> 
          <div className="box">  
            <img src="src/assets/sh2.jpg" alt="img" />
            <div className="row">
              <button className="tag">L</button>
              <button className="tag">Zara</button>
              <button className="tag">Shelf: A12</button>
            </div>
            <div className="colorbutton">
              <button id="red" className="butu"></button>
              <button id="orange" className="butu"></button>
              <button id="yellow" className="butu"></button>
              <button id="green" className="butu"></button>
              <button id="black" className="butu"></button>
            </div>
            <p className="title">Cotton Shirt</p>
            <button type="button" className="button">$120</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
