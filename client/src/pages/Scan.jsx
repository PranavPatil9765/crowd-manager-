import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import "./scan.css"

const Scan = () => {
  return <>
    <div className="main-container">
    <div className="container">
        <div className="loader"><IoPersonSharp size={150}/>
        <span id="countdown"> 0</span></div>
    </div>
    <p id="statusMessage">You are now at position: <span id="statusNumber">0</span></p>
    <div className="button-container">
        <button className="btn" id="toggle-button">Book Now</button>
    </div>
</div>

</>
}

export default Scan