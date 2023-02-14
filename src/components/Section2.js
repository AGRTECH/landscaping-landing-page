import React from "react";
import paintbrush from "../img/greenbrush.png";
import greengears from "../img/greengears.png";
import greenlock from "../img/greenlock.png";
import greenbook from "../img/greenbook.png";
import greenbars from "../img/greenbars.png";
import greenmaintenance from "../img/maintenanceicon.png";

const Section2 = () => {
  return (
    <div className="section2-background">
      <p className="section2-title">What You Can Expect</p>
      <p className="section2-subtitle">
        We <span className="section2-italic">scape</span> the web, so you can{" "}
        <span className="section2-italic">scape</span> more land
      </p>
      <div className="section2-container">
        <div className="section2-toprow">
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img
                  src={paintbrush}
                  className="section2-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section2-service">Professional Design</p>
              </li>
              <li>
                <p>
                  Impress new and current customers with a site designed by web
                  pros
                </p>
              </li>
            </ul>
          </div>
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img
                  src={greengears}
                  className="section2-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section2-service">Turn Vistors Into Customers</p>
              </li>
              <li>
                <p>
                  Websites optimized for trustability, professionalism, and
                  conversions
                </p>
              </li>
            </ul>
          </div>
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img src={greenlock} className="section2-lockimg" alt="" />
              </li>
              <li>
                <p className="section2-service">Maintenance & Updates</p>
              </li>
              <li>
                <p>
                  Fixing any bugs and glitches that arise within your websites
                  and bi-weekly maintenance
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="section2-toprow">
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img
                  src={greenbars}
                  className="section2-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section2-service">Search Engine Optimization</p>
              </li>
              <li>
                <p>Maximize Traffic to Your Site</p>
              </li>
            </ul>
          </div>
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img
                  src={greenbook}
                  className="section2-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section2-service">Copywriting & Story Telling</p>
              </li>
              <li>
                <p>It's Not About What You Say...</p>
              </li>
            </ul>
          </div>
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img
                  src={greenmaintenance}
                  className="section2-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section2-service">Maintenance & Updates</p>
              </li>
              <li>
                <p>Keep Your Site Fresh</p>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Section2;
