import React from "react";
import { useLocation } from "react-router-dom";
import Comp2 from "../components/common/comp2/Comp2";

function Providers() {
  const location = useLocation();
  const data = location.state?.data;

  if (!data) return <h1 className="loading">Loading</h1>;
  console.log("data", data.data[0]);
  const img = data.data[0].packages.company_type.icons.svg;
  const name = data.data[0].packages.company_type.name.value;
  console.log("img", img);

  const leftDesc =
    "Our Leadership Principles aren't just a pretty inspirational wall hanging. These Principles work hard, just like we do. Amazonians use them, every day, whether they're discussing ideas for new projects, deciding on the best solution for a customer's problem, or interviewing candidates. It's just one of the things that makes Amazon peculiar.";
  const rightDesc =
    "We aim to be Earth’s most customer centric company. Our mission is to continually raise the bar of the customer experience by using the internet and technology to help consumers find, discover and buy anything, and empower businesses and content creators to maximize their success.";

  return (
    <div className="providers">
      <div className="providers-head">
        <img src={img} alt="" width={"100px"} height={"100px"} />
        <h3>{name}</h3>
        <div>Work Hard - Have Fun - Make History</div>
      </div>
      <div className="providers-body ds-grid">
        <Comp2 title={"Overview"} desc={leftDesc} />
        <Comp2 title={"Features and Benefits"} desc={rightDesc} />
      </div>
    </div>
  );
}

export default Providers;
