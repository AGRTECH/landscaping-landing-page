import React from "react";
import pricingbg from "../img/pricingbg.png";
import grass from "../img/cartoongrass.png";
import checkmark from "../img/checkicon.svg";
import { Link } from "react-router-dom";

const Section1Project3 = () => {
  return (
    <>
      <div className="section1pricing-background">
        <div className="section1pricing-navbackground"></div>
        <div className="section1pricing-container">
          <div className="section1pricing-flex">
            <p className="section1pricing-firstline">Horizons</p>
            <p className="section1pricing-secondline">Landscaping</p>
            <p className="section1pricing-subtitle">
              Optimized Landscaping Web Design
              <span className="section1pricing-bold"> </span>{" "}
            </p>
            <p className="section1pricing-subsubtitle"></p>
            <div>
              <Link to={"/contact"}>
                <button className="home-button">Let's Chat</button>
              </Link>
              <Link to={"/onboard"}>
                <button className="home-button">Get Summer Free</button>
              </Link>
            </div>
          </div>
          <img src={pricingbg} className="landing-bg" alt="" />
        </div>
        {/* <img src={grass} className="home-grass1" alt="" /> */}
        {/* <div className="grass"></div> */}
        {/* <div className="grass2"></div> */}
        {/* <img src={grass} className="section4-bush2" alt="" /> */}
      </div>
    </>
  );
};

export default Section1Project3;
