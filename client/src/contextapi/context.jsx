import React, { createContext, useContext, useEffect, useState ,useMemo} from "react";
import { MdOutlineStar } from "react-icons/md";
import {useNavigate} from "react-router-dom"
// Create AuthContext
export const CardContext = createContext();

// Provide AuthContext
export const CardProvider = ({ children }) => {
  const [Cards, SetCards] = useState(null);
  const [loading,setloading] = useState(false);
  const [product,setproduct] = useState(null);
  const navigate = useNavigate();

  async function gotoproduct(object){
    setproduct(object);
    navigate("/product");
    
  }
  
  useEffect(() => {
        
        
        // Fetch data from an API or any other source

      getData();
        async function getData() {
          try {
            setloading(true);
            
            const response = await fetch('http://localhost:3000/home/v1/api');
            const data = await response.json();
            const showCards = data.map((object) => {
              
              return (
                <div className="cardsContainer" onClick={()=>{gotoproduct(object)}}>
                      <div className="box">
                      
                      {object.featured &&  <MdOutlineStar className="star"/>}
  
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
            
          catch (error) {
            console.log(error);
            
          }finally{
            setloading(false);
          }
        }
      }, []);


      const ApplyPriceFilter = async(size,minprice,maxprice) => {
   
          try{

            setloading(true);
            const response = await fetch('http://localhost:3000/home/v1/api',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ size, minprice, maxprice })
            })
            const data = await response.json();
            const showCards = data.map((object) => {
              return (
                <div className="cardsContainer">
                  <div className="box">
                  
                  {object.featured &&  <MdOutlineStar className="star"/>}
    
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
        })
        SetCards(showCards);    
        
          } catch (e) {
            console.log(e);
            
          }finally{
            setloading(false);
          }
        }

    return (
        <CardContext.Provider value={{ Cards , ApplyPriceFilter ,loading ,product}}>
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
