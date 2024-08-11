import React, { useState, useEffect } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import "./scan.css"
import { io } from "socket.io-client"
const Scan = () => {
  const [phone] = useState(2);
  const [position,setPosition] = useState(0);
  useEffect(() => {
    async function initStatus() {
      try {
        const response = await fetch("http://localhost:3000/rooms/api/", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ phone })
        });

        const data = await response.json();
        console.log(data);

        if (data.position !== undefined) {
          setPosition(data.position);
        }
      } catch (error) {
        console.error("Error fetching initial status:", error);
      }
    }
    initStatus();
    const socket = io('http://localhost:3000'); 
    socket.on("Update", data => {
      console.log(data);
      if (data.position !== undefined && data.phone == phone) {
        setPosition(data.position);
      }
    });
    return () => {
      socket.off("Update");
      socket.disconnect();
    };
  }, [phone]);

  return <>
    <div className="scan-card">
      <div className="scan-container">
        <div className="scan-loader">
          <IoPersonSharp size={65} />
          <span id="scan-countdown">{position}</span>
        </div>
      </div>
      <p id="scan-status-message">You are now at position: <span id="scan-status-number">{position}</span></p>
      <div className="scan-button-container">
        <button className="scan-btn" id="scan-toggle-button">Book Now</button>
      </div>
    </div>

</>
}

export default Scan