import React from 'react'
import { UseCardContext } from '../contextapi/cardcontext'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const {cards} = UseCardContext();
  return <>

    <header className="header-container">
        <div className="walmart-name">Walmart</div>
        <input type="text" className="search-bar" placeholder="What's on your mind?"/>
        <div className="button-group">
            <button> Hot Deals </button>
            <button    onClick={()=>{navigate("/Scan")}}  >Scan QR</button>
            <button    onClick={()=>{navigate("/Login")}} >Sign In</button>
            <button className="profile-button"><i className="fa-solid fa-user"></i></button>
        </div>
    </header>

    <nav className="main-nav">
        <div className="sec-container">
            <div className="dropdown">
                <button className="dropdown-button" >Explore All ▼</button>
                <div className="dropdown-content">
                    <a href="#">Electronics</a>
                    <a href="#">Clothing</a>
                    <a href="#">Home & Kitchen</a>
                    <a href="#">Sports & Outdoors</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Gender▼</button>
                <div className="dropdown-content">
                    <a href="#">Male</a>
                    <a href="#">Female</a>
                    <a href="#">Kids Boys</a>
                    <a href="#">Kids Girls</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Brand ▼</button>
                <div className="dropdown-content">
                    <a href="#">Puma</a>
                    <a href="#">Nike</a>
                    <a href="#">Team Spirit</a>
                    <a href="#">Maximus</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropdown-button">Subscription ▼</button>
                <div className="dropdown-content">
                    <a href="#">Yearly</a>
                    <a href="#">Monthly</a>
                    <a href="#">Weekly</a>
                </div>
            </div>
        </div>
    </nav>

    <section className="product-cards">
    
    {cards && cards.length > 0 ? (
  cards.map((card, index) => {
    return (
      <div key={index}>{card}</div>
    );
  })
) : (
  //loader html
  /* From Uiverse.io by Nawsome */ 
<svg className="pl" width="240" height="240" viewBox="0 0 240 240" >
	<circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
	<circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
	<circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
	<circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
</svg>
)}

    
    </section>

    <footer className="footer">
        <p>&copy; 2024 Walmart</p>
    </footer>


    </>
  
}

export default Home