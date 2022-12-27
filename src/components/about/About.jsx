import React from "react";
import "./about.css";

import Comp1 from "../common/comp1/Comp1";
import ImgSvg from "./ImgSvg";

function About() {
  return (
    <div className="about ds-grid">
      <Comp1
        title={"We Fill Your Gap"}
        body={
          "We are ready to bring you all your needs anywhere at any time throughour useful mobile application. No need to waste time you are one clickaway."
        }
        btnTitle={"Install Now"}
      />
      <div className="about-img">
        <ImgSvg />
      </div>
    </div>
  );
}

export default About;
