import React, { useEffect, useState } from 'react';
import '/src/App.css'; // Make sure the path is correct based on your project structure
import { useNavigate } from 'react-router-dom';
import { UseContext } from '../contextapi/context';
const Navbar = () => {
  const navigate = useNavigate();
  const {ApplyPriceFilter} = UseContext();
  const [size,setsize] = useState(null);
  const [minprice, setminPrice] = useState(null);
  const [maxprice, setmaxPrice] = useState(null);
  useEffect(()=>{
    const dropdown = document.querySelectorAll('.size-item');
    dropdown.forEach((data)=>{
     data.addEventListener('click', (e) => {
       setsize(e.target.value);
     }); 
    
    });
    return () => dropdown.forEach((data)=>{
      data.removeEventListener('click', (e) => {});
    })
  },[])

  const ApplyFilter = ()=>{
    ApplyPriceFilter(size ,minprice, maxprice);
    closeDrawer();
  }

  const openDrawer = () => {
    document.getElementById("myDrawer").style.width = "250px";
  };

  const closeDrawer = () => {
    document.getElementById("myDrawer").style.width = "0";
  };

  const redirectToHome = () => {
    ApplyPriceFilter();
    closeDrawer();
  };

  const redirectToScanQR = () => {
    
    navigate("/scan");
  };

  const toggleDropdown = () => {
    document.getElementById("sizeDropdown").classList.toggle("show");
  };

  const togglePriceDropdown = () => {
    document.getElementById("priceDropdown").classList.toggle("show");
  };

  

  return (
    <>
      <div className="topContainer">
        <span className="hamburger" onClick={openDrawer}>&#9776;</span>
        <div className="tabContainer">
          <button className='tabs' onClick={redirectToHome}>Home</button>
          <button className="tabs" onClick={redirectToScanQR}>ScanQR</button>
        </div>
        <img src="/src/assets/logow.png" width="155" style={{ height: '100%', width: '120px' }} alt="Logo" />
      </div>
      
      <div className="drawer" id="myDrawer">
        <a href="#" className="closebtn" onClick={closeDrawer}>&times;</a>
        <a href="#" onClick={redirectToHome}>Explore all</a>
        <a href="#" onClick={toggleDropdown}>Size</a>
        <div id="sizeDropdown" className="dropdown-content" 
        >
          <label className="dropdown-item">
            <input type="radio" name="size" value="S" className='size-item'/>
            S
          </label>
          <label className="dropdown-item">
            <input type="radio" name="size" value="M" className='size-item'/>
            M
          </label>
          <label className="dropdown-item">
            <input type="radio" name="size" value="L" className='size-item'/>
            L
          </label>
          <label className="dropdown-item">
            <input type="radio" name="size" value="XL" className='size-item'/>
            XL
          </label>
          <label className="dropdown-item">
            <input type="radio" name="size" value="XXL" className='size-item'/>
            XXL
          </label>
        </div>
        <a href="#" onClick={togglePriceDropdown}>Price</a>
        <div id="priceDropdown" className="price-dropdown">
          <label htmlFor="minPrice">Min Price:</label>
          <input type="number" id="minPrice" name="minPrice" placeholder="Enter min price" onChange={(e)=>{
            setminPrice(e.target.value);
          }} value={minprice}/>
          <label htmlFor="maxPrice">Max Price:</label>
          <input type="number" id="maxPrice" name="maxPrice" placeholder="Enter max price" onChange={(e)=>{
            setmaxPrice(e.target.value);
          }} value={maxprice}/><br /><br />
        </div>
        <a href="#">Top Brands</a>
          <button onClick={ApplyFilter} style={{ width: '45px', display: 'flex', justifyContent: 'center' }}>Apply</button>
      </div>
    </>
  );
};

export default Navbar;
