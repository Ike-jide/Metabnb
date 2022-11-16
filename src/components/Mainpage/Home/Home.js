import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Places from "../Places/Places";
import Footer from "../Footer/Footer";
const Home = (props) => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home-text">
          <h2>
            Rent a <span>Place</span> away from <br />
            <span>Home</span> in the <span>Metaverse</span>
          </h2>
          <p>
            we provide you access to luxury and affordable houses
            <br /> in the metaverse, get a chance to turn your <br />
            imagination to reality at your comfort zone{" "}
          </p>
          <form>
            <input
              className="search"
              type="text"
              placeholder="Search for location"
            />
            <button className="search-btn">Search</button>
          </form>
        </div>
        <img src="./images/Group 4028.png" alt="" className="dock-image"/>
      </div>
      <div className="home-div">
        <img
          className="image-span-details"
          src="./images/Frame 137.png"
          alt=""
        />
      </div>
     <Places metas={props.metas}/>
     <Footer/>
    </div>
    
  );
};
export default Home;
