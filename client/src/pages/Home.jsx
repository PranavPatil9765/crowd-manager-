import React from 'react';
import '/src/App.css'; // Make sure the path is correct based on your project structure
import { UseContext } from '../contextapi/context';

const Home = () => {
  const { Cards } = UseContext();

  return (
    <div className="home">
      <div className="bottomContainer">
        {Cards ? (
          Cards.length === 0 ? (
            <h1>No Data Found</h1>
          ) : (
            Cards.map((card, index) => (
              <div key={index}>{card}</div>
            ))
          )
        ) : (
          // Loader
          <div className="honeycomb">
            <h1>Loading</h1>
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
