import React, {useState} from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"
import Wallet from "../Wallet/Wallet";



const Navbar = () => {
  const [isMobile,setIsMobile] = useState(false);
  return (
    <nav className="nav">
      <Link to="/">
        <div className="logo">
          <img className="img-logo" src="./images/logo/Vector.png" alt="" />
          <img
            className="img-logo-name"
            src="./images/logo/Vector (1).png"
            alt=""
          />
        </div>
        </Link>
      <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <ul>
          <li className="active">
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <Link to="/place-to-stay">Place to stay</Link>
             
            
          </li>
          <li>
            <a href="/NFTs">
              NFTs
            </a>
          </li>
          <li>
            <a href="/community">
              Community
            </a>
          </li>
          <li>
            <Wallet
             
              
              style={{color:"white"}}
            >
              Connect wallet
            </Wallet>
          </li>
        </ul>
        <button className="mobile-menu-icon">
       {isMobile ? <i className="fas fa times"></i> :<i className="fas fa-bars"></i>}

        </button>
      </div>
     
    </nav>
  );
};
export default Navbar;
