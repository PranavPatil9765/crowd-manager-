import React, { createContext, useContext, useEffect, useState ,useMemo} from "react";
import { MdOutlineStar } from "react-icons/md";

// Create AuthContext
export const CardContext = createContext();

// Provide AuthContext
export const CardProvider = ({ children }) => {
    const [Cards, SetCards] = useState(null);

    
    useMemo(() => {
        console.log('inside memo');
        
        // Fetch data from an API or any other source

        async function getData() {
          const response = await fetch('http://localhost:3000/home/v1/api');
          const data = await response.json();
          const showCards = data.map((object) => {
            if(object.featured){
              return (
                <div className="cardsContainer">
                  <div className="box">
                  <MdOutlineStar className="star"/>

                    <img src={object.url} alt="img" />
                    <div className="row">
                      <button className="tag">{object.size}</button>
                      <button className="tag">{object.brand}</button>
                      <button className="tag">Shelf: {object.location}</button>
                    </div>
                    <p className="title">{object.name}</p>
                    <button type="button" className="button">${object.price}</button>
                  </div>
                </div>
          );
            }
            return (
                  <div className="cardsContainer">
                    <div className="box">
                    

                      <img src={object.url} alt="img" />
                      <div className="row">
                        <button className="tag">{object.size}</button>
                        <button className="tag">{object.brand}</button>
                        <button className="tag">Shelf: {object.location}</button>
                      </div>
                      <p className="title">{object.name}</p>
                      <button type="button" className="button">${object.price}</button>
                    </div>
                  </div>
            );
          });
          SetCards(showCards);
        }
        getData();
      }, []);

      const ApplyPriceFilter = async(size,minprice,maxprice) => {
        
        const response = await fetch('http://localhost:3000/home/v1/api',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ size, minprice, maxprice })
        })
        const data = await response.json();
        const showCards = data.map((object) => {
          if(object.featured){
            return (
              <div className="cardsContainer">
                <div className="box">
                <MdOutlineStar className="star"/>

                  <img src={object.url} alt="img" />
                  <div className="row">
                    <button className="tag">{object.size}</button>
                    <button className="tag">{object.brand}</button>
                    <button className="tag">Shelf: {object.location}</button>
                  </div>
                  <p className="title">{object.name}</p>
                  <button type="button" className="button">${object.price}</button>
                </div>
              </div>
        );
          }
          return (
                <div className="cardsContainer">
                  <div className="box">
                  

                    <img src={object.url} alt="img" />
                    <div className="row">
                      <button className="tag">{object.size}</button>
                      <button className="tag">{object.brand}</button>
                      <button className="tag">Shelf: {object.location}</button>
                    </div>
                    <p className="title">{object.name}</p>
                    <button type="button" className="button">${object.price}</button>
                  </div>
                </div>
          );
        
        });
        console.log('cards',Cards);
        
        SetCards(showCards);
        console.log(Cards);
        
      };
 

    return (
        <CardContext.Provider value={{ Cards , ApplyPriceFilter }}>
            {children}
        </CardContext.Provider>
    );
};

// Custom hook to use AuthContext
export const UseContext = () => {
    const authContextValue = useContext(CardContext);
    if (!authContextValue) {
        throw new Error("card usage must be used within an AuthProvider");
    }
    return authContextValue;
};
