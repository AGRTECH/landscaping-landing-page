import React from "react";
import Section1Pricing from "./Section1Pricing";
import Section2Pricing from "./Section2Pricing";
import Section3Pricing from "./Section3Pricing";
import Section4Pricing from "./Section4Pricing";
import Section3 from "./Section3";
import FAQ from "./FAQ";
import Nav from "./Nav";
import Section6 from "./Section6";
import Section7 from "./Section7";
import bg from "../img/pricingbg.jpg";

const Pricing = () => {
  return (
    <>
      <Nav />
      <Section1Pricing />
      <Section3Pricing />
      <Section3 />
      <FAQ />
      <Section6 />
      <Section7 />
    </>
  );
};

export default Pricing;