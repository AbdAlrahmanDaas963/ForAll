import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function Card({ title, data, img }) {
  return (
    <Link to={"/providers"} state={{ data: data }} className="card">
      <div className="img-container">
        <img
          className="card-img"
          src={img}
          alt=""
          width={"100px"}
          height={"20px"}
        />
      </div>
      <div>{title}</div>
    </Link>
  );
}

export default Card;
