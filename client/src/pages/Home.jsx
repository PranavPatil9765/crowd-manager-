import React from 'react';
import '/src/App.css'; // Make sure the path is correct based on your project structure
import { UseContext } from '../contextapi/context';

const Home = () => {
  const { Cards ,loading} = UseContext();
  
  return (
    <div className="home">
      <div className="bottomContainer">
        {Cards ? (
            Cards.map((card, index) => (
              <div key={index}>{card}</div>
            ))
        ) : (
          // Loader
          
          <div className="honeycomb">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
