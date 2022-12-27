import React from "react";
import "./footer.css";
import play from "../../assets/play.png";
import apple from "../../assets/apple.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-back">
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
      <div className="footer-left-content">
        <div className="left-content-title">About Us</div>
        <ul className="left-content-list">
          <li>Our History</li>
          <li>How we Work</li>
          <li>Resources</li>
        </ul>
        <div>
          <img src={play} alt="" width={"70px"} />
          <img src={apple} alt="" width={"70px"} />
        </div>
      </div>
      <div className="footer-center-logo">
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
        <div className="social">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24.997"
            viewBox="0 0 25 24.997"
          >
            <path
              id="Path_156"
              data-name="Path 156"
              d="M114.76,135.5h1.562c.3.036.6.068.892.109a12.509,12.509,0,0,1,4.11,23.469,10.9,10.9,0,0,1-2.306.922v-9.241h2.67l.405-3.127h-3.074c0-.832-.035-1.639.011-2.44a.989.989,0,0,1,.95-1.007,11.347,11.347,0,0,1,1.362-.058c.274-.007.548,0,.824,0v-2.814c-.587-.032-1.161-.092-1.735-.088a8.778,8.778,0,0,0-1.793.121,3.533,3.533,0,0,0-2.848,3.446c-.042.844-.022,1.692-.029,2.538,0,.1,0,.19,0,.313H113.1v3.134h2.644v9.7a.9.9,0,0,1-.09.014c-.066,0-.131,0-.2,0a11.928,11.928,0,0,1-5.167-1.163,12.336,12.336,0,0,1-7.053-9.156c-.091-.461-.131-.931-.194-1.4v-1.562c.019-.16.041-.32.058-.481a12.52,12.52,0,0,1,10.31-11.048C113.859,135.612,114.311,135.562,114.76,135.5Z"
              transform="translate(-103.043 -135.5)"
              fill="#fff"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
          >
            <g
              id="Group_49"
              data-name="Group 49"
              transform="translate(-76.217 -138.953)"
            >
              <path
                id="Path_157"
                data-name="Path 157"
                d="M101.217,150.67v1.563c-.02.16-.042.32-.06.48a12.531,12.531,0,0,1-10.268,11.046c-.462.084-.931.13-1.4.194H87.93a1.7,1.7,0,0,0-.188-.041,12.06,12.06,0,0,1-7.206-3.019,12.2,12.2,0,0,1-4.261-10.7,11.837,11.837,0,0,1,3.065-7.008,12.24,12.24,0,0,1,9.162-4.231,11.86,11.86,0,0,1,6.6,1.758,12.319,12.319,0,0,1,5.919,8.582C101.11,149.751,101.154,150.212,101.217,150.67Zm-12.506-6.434v.086c-1.026,0-2.052-.019-3.076.006a4.279,4.279,0,0,0-2.334.687,3.852,3.852,0,0,0-1.707,3.313c-.042,2.081-.026,4.165,0,6.248a4.1,4.1,0,0,0,.683,2.284,3.863,3.863,0,0,0,3.314,1.708c2.082.042,4.167.033,6.25,0a3.994,3.994,0,0,0,2.763-1.061,4.042,4.042,0,0,0,1.236-2.983c.042-1.708.043-3.418.044-5.126a15.083,15.083,0,0,0-.086-1.51,3.771,3.771,0,0,0-3.522-3.509C91.089,144.28,89.9,144.28,88.711,144.236Z"
                transform="translate(0)"
                fill="#fff"
              />
              <path
                id="Path_158"
                data-name="Path 158"
                d="M81.551,150.116c.032-1.066.037-2.157.1-3.243a2.461,2.461,0,0,1,1.32-2.172,3.328,3.328,0,0,1,1.568-.353c2.033,0,4.068-.023,6.1.04a2.446,2.446,0,0,1,2.524,2.53q.086,3.228,0,6.461a2.445,2.445,0,0,1-2.512,2.519q-3.228.084-6.46,0a2.479,2.479,0,0,1-2.545-2.542C81.584,152.287,81.582,151.212,81.551,150.116Zm5.855-3.625a3.655,3.655,0,1,0,3.66,3.66A3.65,3.65,0,0,0,87.406,146.491Zm3.809.7a.851.851,0,1,0-.852-.836A.847.847,0,0,0,91.215,147.194Z"
                transform="translate(1.299 1.306)"
                fill="#fff"
              />
              <path
                id="Path_159"
                data-name="Path 159"
                d="M89.146,149.505a2.373,2.373,0,1,1-2.378-2.361A2.376,2.376,0,0,1,89.146,149.505Z"
                transform="translate(1.938 1.934)"
                fill="#fff"
              />
            </g>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
          >
            <path
              id="Path_160"
              data-name="Path 160"
              d="M230.692,149.33v1.077a1.983,1.983,0,0,0-.061.257c-.037.331-.053.666-.1,1a12.486,12.486,0,0,1-14.152,10.576,11.879,11.879,0,0,1-7.065-3.569,12.169,12.169,0,0,1-3.434-10.9,12.011,12.011,0,0,1,4.734-7.842,12.553,12.553,0,0,1,11.567-1.906,12.476,12.476,0,0,1,8.4,10.469C230.614,148.771,230.655,149.05,230.692,149.33Zm-11.39-2.253c-.009-.025-.031-.055-.028-.082.024-.251-.111-.289-.326-.287-.831.01-1.663.008-2.493,0-.187,0-.259.054-.259.249q.007,4.993,0,9.985c0,.2.069.25.257.247.757-.008,1.515,0,2.273,0,.6-.005.541.112.542-.547q0-2.912,0-5.824c0-.136-.023-.276.146-.352a11.721,11.721,0,0,1,1.107-.515c.593-.2,1.245-.138,1.5.525a1.417,1.417,0,0,1,.092.5c.006,1.958,0,3.916,0,5.873,0,.343,0,.343.331.343h2.419c.319,0,.32,0,.32-.318q0-3.022,0-6.045a3.075,3.075,0,0,0-.047-.558,4.038,4.038,0,0,0-4.788-3.417C220,146.9,219.66,147,219.3,147.078Zm-7.554,4.875c0,1.655,0,3.31,0,4.966,0,.217.062.277.276.274q1.258-.018,2.516,0c.209,0,.287-.057.286-.274q-.007-4.965,0-9.933c0-.215-.076-.279-.286-.277-.83.01-1.662.012-2.492,0-.237,0-.3.07-.3.3C211.751,148.658,211.748,150.306,211.748,151.953Zm3.42-8.151a1.9,1.9,0,1,0-1.893,1.883A1.871,1.871,0,0,0,215.168,143.8Z"
              transform="translate(-205.692 -137.372)"
              fill="#fff"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24.996"
            viewBox="0 0 25 24.996"
          >
            <path
              id="Path_161"
              data-name="Path 161"
              d="M22.728,135.522H24.29c.418.054.837.093,1.252.164a12.546,12.546,0,0,1,10.274,10.182c.081.454.129.914.192,1.372V148.8c-.037.3-.068.6-.111.892a12.083,12.083,0,0,1-3.448,7.033,12.146,12.146,0,0,1-11.52,3.51,11.948,11.948,0,0,1-7.385-4.695,12.455,12.455,0,0,1,1.063-16.28,12.238,12.238,0,0,1,6.747-3.55C21.81,135.634,22.271,135.585,22.728,135.522Zm-5.244,7.35a2.673,2.673,0,0,0-.4,1.523,2.922,2.922,0,0,0,1.214,2.262l-.039.066-1.209-.337a2.925,2.925,0,0,0,2.209,2.8l-.015.06H18.073a2.88,2.88,0,0,0,1,1.41,3.084,3.084,0,0,0,1.668.6,5.911,5.911,0,0,1-4.2,1.192c.087.062.121.092.161.115a8.158,8.158,0,0,0,12.377-7.132.446.446,0,0,1,.187-.409,3.923,3.923,0,0,0,.563-.5c.224-.236.426-.492.673-.78l-1.523.408-.03-.064a2.865,2.865,0,0,0,1.146-1.451l-1.577.563a.325.325,0,0,1-.365-.092,2.87,2.87,0,0,0-4.8,1.784,8,8,0,0,0-.006.978A8.215,8.215,0,0,1,17.484,142.872Z"
              transform="translate(-11.008 -135.522)"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
      <div className="footer-right-content">
        <div className="location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="35"
            viewBox="0 0 33.6 48"
          >
            <path
              id="Icon_material-location-on"
              data-name="Icon material-location-on"
              d="M24.3,3A16.788,16.788,0,0,0,7.5,19.8C7.5,32.4,24.3,51,24.3,51S41.1,32.4,41.1,19.8A16.788,16.788,0,0,0,24.3,3Zm0,22.8a6,6,0,1,1,6-6A6,6,0,0,1,24.3,25.8Z"
              transform="translate(-7.5 -3)"
              fill="#f5f5f5"
            />
          </svg>
          <div className="city">Saudi Arabia</div>
        </div>
        <div className="street">
          Jeddah, Sultan St., Lilyan Tower 2, 11th Floor
        </div>
        <div className="contact">
          <div>
            <span>Email: </span> hello@forall.com
          </div>
          <div>
            <span>Office: </span>+00 123 456 789
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
