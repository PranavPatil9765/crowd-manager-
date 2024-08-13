import React, { useState, useEffect } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import "./scan.css"
import { io } from "socket.io-client"
import { useNavigate } from 'react-router-dom';
import { UseLoginContext } from '../contextapi/logincontext';



const Scan = () => {
  const Navigate = useNavigate(); 
    const {isLoggedIn } = UseLoginContext();
    const {token} = UseLoginContext();
    const [queue,setqueue]= useState(null);
    const [socket,setsocket] = useState(null);
    const [myposition,setmyposition] = useState(0);
  
    if(!isLoggedIn){  
      Navigate("/Login");
      return;
    }
    useEffect(() => {

    //go to login page if logged not logged in

    //setting socket
    const socket = io("http://localhost:3000", {
      cors: true,
    });

    // Set the socket id after the connection is established
    socket.on("connect", () => {
      console.log("Connected with ID:", socket.id);
    });

    setsocket(socket);
    
    
    socket.emit("getqueue",({token}))
    socket.on('getqueue',queue =>{
      setqueue(queue);
    })

    socket.emit("getposition",({token}));
    socket.on('getposition',index=>{
      setmyposition(index);
    })



    //temp
    

    
    return ()=>{
      
      socket.disconnect()
      socket.off("getposition");
      socket.off("getqueue");
    } 
    
  },[]);

 

  const handlebooking = ()=>{
    socket.emit("booking");
  }
  const cancelbooking = ()=>{
    
    socket.emit("cancelbooking");
  }




  return <>
    <div className="scan-card">
      <div className="scan-container">
        <div className="scan-loader">
          <IoPersonSharp size={65} />
          <span id="scan-countdown">{queue}</span>
        </div>
      </div>
      <p id="scan-status-message">You are now at position: <span id="scan-status-number">{myposition}</span></p>
      <div className="scan-button-container">
        <button className="scan-btn" id="scan-toggle-button" onClick={handlebooking}>Book Now</button>
        <button className="scan-btn" id="scan-toggle-button" onClick={cancelbooking}>Cancel Booking</button>
      </div>
    </div>

</>
}

export default Scan