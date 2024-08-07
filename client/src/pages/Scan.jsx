import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import "./scan.css"

const Scan = () => {
  return <>
    <div className="scan-card">
      <div className="scan-container">
        <div className="scan-loader">
          <IoPersonSharp size={65} />
          <span id="scan-countdown">0</span>
        </div>
      </div>
      <p id="scan-status-message">You are now at position: <span id="scan-status-number">0</span></p>
      <div className="scan-button-container">
        <button className="scan-btn" id="scan-toggle-button">Book Now</button>
      </div>
    </div>

</>
}

export default Scan