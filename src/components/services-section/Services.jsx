import React from "react";
import "./services.css";

import img from "../../assets/ppl.png";
import Comp1 from "./../common/comp1/Comp1";

function Services() {
  return (
    <div className="Services ds-grid">
      <img src={img} alt="" width={"100%"} height={"100%"} />
      <Comp1
        title={"What We Offer"}
        body={
          "We Offer you different kinds of services that will help you save your time and be more comfortable. "
        }
        btnTitle={"Our Services"}
        style={{ justifySelf: "center" }}
      />
    </div>
  );
}

export default Services;
