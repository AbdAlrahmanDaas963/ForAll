import React from "react";
import "./comp2.css";

function Comp2({ title, desc }) {
  return (
    <div className="comp2">
      <div className="comp2-title">{title}</div>
      <div className="comp2-desc">{desc}</div>
    </div>
  );
}

export default Comp2;
