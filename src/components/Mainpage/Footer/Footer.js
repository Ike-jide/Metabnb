import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
     
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
