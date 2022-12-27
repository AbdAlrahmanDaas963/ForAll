import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={"1920px"}
          height={"350px"}
          viewBox="0 0 1920.002 352.106"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="1"
              y1="0.126"
              x2="0"
              y2="0.121"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#45c0be" />
              <stop offset="1" stopColor="#367877" />
            </linearGradient>
          </defs>
          <path
            id="Path_7"
            data-name="Path 7"
            d="M960,352.106C1002.632,161.053,1920,85,1920,85V0H0V85.263S912.632,165.79,960,352.106Z"
            fill="url(#linear-gradient)"
          />
        </svg>
      </div>
      <div className="header-left-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46.589"
          height="51.166"
          viewBox="0 0 46.589 51.166"
        >
          <g
            id="Group_2"
            data-name="Group 2"
            transform="translate(-20.588 -9.731)"
          >
            <path
              id="Path_4"
              data-name="Path 4"
              d="M4.5,18h35"
              transform="translate(26.178 21.71)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M4.5,9h35L26.956-10.193"
              transform="translate(26.178 22)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
            <path
              id="Path_6"
              data-name="Path 6"
              d="M40.178,27H4.617L-2.822,37.611"
              transform="translate(25.5 21.197)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </g>
        </svg>
      </div>
      <div className="header-center-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <image
            id="White_Logo_100x100"
            data-name="White Logo 100x100"
            width="100"
            height="100"
            xlinkHref="data:image/png;base64,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"
          />
        </svg>
        <div>FORALL</div>
        <div>We Fill The Gap</div>
      </div>
      <div className="header-tabs">
        <ul>
          <li>Our Services</li>
          <li>About Us</li>
          <li>Join Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
