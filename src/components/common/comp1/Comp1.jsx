import React from "react";
import Button from "../button/Button";
import "./comp1.css";

function Comp1({ title, body, btnTitle, style }) {
  return (
    <div className="about-desc" style={style}>
      <div className="desc-title">{title}</div>
      <div>{body}</div>
      <Button title={btnTitle} />
    </div>
  );
}

export default Comp1;
