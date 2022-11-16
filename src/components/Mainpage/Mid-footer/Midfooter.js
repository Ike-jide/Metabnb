import React from "react";
import "./Midfooter.css";
 function Midfooter(){
    return(
        <div className="mid__footer">
            <div className="mid-footer">
        <div className="mid-footer-text">
          <h2>
            Metabnb <span>NFTs</span> <br />
            <span>Home</span> in the <span>Metaverse</span>
          </h2>
          <p>
          Discover our NFT gift cards collection. Loyal 
            <br /> customers gets amazing gift cards which are  <br /> 
            traded as NFTs. These NFTs gives our cutomer  <br /> access to loads of our exclusive services.{" "}
          </p>
          <button> Learn more</button>
        </div>
        <div className="mid-footer-image">
            <img src="./images/game-icon/image 9.png" alt="" className="image2"></img>
            <img src="./images/game-icon/image 7.png" alt="" className="image1"></img>
            <img src="./images/game-icon/image 8.png" alt="" className="image3"></img>
        </div>
        </div>
        </div>
    )
 }
 export default Midfooter;