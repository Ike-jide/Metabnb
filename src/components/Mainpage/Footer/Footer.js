import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
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
      <div className="main-footer">
        <div className="footer-logo">
        <div className="logo">
        <img src="./images/footer/Vector.png" alt=""></img>
        <img src="./images/footer/Vector (1).png" alt=""></img>
        </div>
        <div className="third-party-logo">
        <img src="./images/footer/Vector (2).png" alt="" style={{height:"16px"}}></img>
        <img src="./images/footer/ig.png" alt="" style={{height:"16px"}}></img>
        <img src="./images/footer/Vector (3).png" alt="" style={{height:"16px"}}></img>
        </div>
        <h5 style={{color:"white"}}>@ 2022 Metabnb</h5>
        </div>
        <div className="footer-menu">
          <div className="lower-menu">
            <ul>
              <li>Community</li>
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>
          </div>
          <div className="lower-menu">
          <ul>
              <li>Places</li>
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>
          </div>
          <div className="lower-menu">
          <ul>
              <li>About us</li>
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
