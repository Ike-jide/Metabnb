import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"
import Wallet from "../Wallet/Wallet";



const Navbar = () => {
 
 
  return (
    <nav className="nav">
    <input type="checkbox" id="nav-check" />
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
        <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
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
            <a href="/#">
              NFTs
            </a>
          </li>
          <li>
            <a href="/#">
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
      
      </div>
     
    </nav>
  );
};
export default Navbar;
