import React, { useState } from 'react';
import '/src/App.css'; // Make sure the path is correct based on your project structure

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('');

  const openDrawer = () => {
    document.getElementById("myDrawer").style.width = "250px";
  };

  const closeDrawer = () => {
    document.getElementById("myDrawer").style.width = "0";
  };

  const redirectToHome = () => {
    setActiveTab('home');
    // Implement the function to redirect to the home page
  };

  const redirectToScanQR = () => {
    setActiveTab('scanQR');
    // Implement the function to redirect to the ScanQR page
  };

  const toggleDropdown = () => {
    document.getElementById("sizeDropdown").classList.toggle("show");
  };

  const togglePriceDropdown = () => {
    document.getElementById("priceDropdown").classList.toggle("show");
  };

  const applyPriceFilter = () => {
    // Implement the function to apply the price filter
  };

  const redirectToTopBrands = () => {
    // Implement the function to redirect to the Top Brands page
  };

  return (
    <>
      <div className="topContainer">
        <span className="hamburger" onClick={openDrawer}>&#9776;</span>
        <div className="tabContainer">
          <button className={`tabs ${activeTab === 'home' ? 'active' : ''}`} onClick={redirectToHome}>Home</button>
          <button className={`tabs ${activeTab === 'scanQR' ? 'active' : ''}`} onClick={redirectToScanQR}>ScanQR</button>
        </div>
        <img src="/src/assets/logow.png" width="155" style={{ height: '100%', width: '120px' }} alt="Logo" />
      </div>
      
      <div className="drawer" id="myDrawer">
        <a href="javascript:void(0)" className="closebtn" onClick={closeDrawer}>&times;</a>
        <a href="#" onClick={redirectToHome}>Explore all</a>
        <a href="#" onClick={toggleDropdown}>Size</a>
        <div id="sizeDropdown" className="dropdown-content">
          <label className="dropdown-item">
            <input type="radio" name="size" value="S" />
            S
          </label>
          <label className="dropdown-item">
            <input type="radio" name="size" value="M" />
            M
          </label>
          <label className="dropdown-item">
            <input type="radio" name="size" value="L" />
            L
          </label>
          <label className="dropdown-item">
            <input type="radio" name="size" value="XL" />
            XL
          </label>
          <label className="dropdown-item">
            <input type="radio" name="size" value="XXL" />
            XXL
          </label>
        </div>
        <a href="#" onClick={togglePriceDropdown}>Price</a>
        <div id="priceDropdown" className="price-dropdown">
          <label htmlFor="minPrice">Min Price:</label>
          <input type="number" id="minPrice" name="minPrice" placeholder="Enter min price" />
          <label htmlFor="maxPrice">Max Price:</label>
          <input type="number" id="maxPrice" name="maxPrice" placeholder="Enter max price" /><br /><br />
          <button onClick={applyPriceFilter} style={{ width: '45px', display: 'flex', justifyContent: 'center' }}>Apply</button>
        </div>
        <a href="#" onClick={redirectToTopBrands}>Top Brands</a>
      </div>
    </>
  );
};

export default Navbar;
