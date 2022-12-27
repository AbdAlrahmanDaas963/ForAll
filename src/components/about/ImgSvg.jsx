import React from "react";
import img from "../../assets/Globe.png";

function ImgSvg() {
  return (
    <div className="about-img">
      <img src={img} alt="" width={"100%"} height={"100%"} />
    </div>
  );
}

export default ImgSvg;
