import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

import "./our-pro.css";
import Card from "../common/card/Card";
import { Link } from "react-router-dom";

function OurPro() {
  const [data, setData] = useState();
  var itemsold = [
    {
      name: "Amazon",
      q: 1,
      img: img1,
    },
    {
      name: "Aramex",
      q: 2,
      img: img2,
    },
    {
      name: "Amazon",
      q: 3,
      img: img3,
    },
    {
      name: "Hitachi",
      q: 4,
      img: img1,
    },
    {
      name: "Aramex",
      q: 5,
      img: img2,
    },
  ];

  useEffect(() => {
    axios
      .get(`https://forall.sa/services/api/ads/companies?page_count=3`)
      .then((res) => {
        const datas = res.data;
        setData(datas);
      });
  }, []);

  const sliderItems = itemsold.length > 3 ? 3 : itemsold.length;
  const items = [];
  for (let i = 0; i < itemsold.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <div className="Banner" key={i.toString()}>
          <div className="BannerGrid">
            {itemsold.slice(i, i + sliderItems).map((da, index) => {
              return (
                <Card
                  key={index.toString()}
                  title={da.name}
                  data={data}
                  img={da.img}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }
  return (
    <div className="our-pro">
      <div className="our-pro-head">Our Providers</div>
      <div className="our-pro-body">
        <Carousel
          animation="slide"
          navButtonsAlwaysVisible={true}
          sx={{
            height: "300px",
            width: "100%",
            "& img": {
              height: "300px",
              width: "-webkit-fill-available",
            },
          }}
        >
          {items}
          {/* {itemsold.map((item, i) => (
            <Card key={i} title={item.name} />
          ))} */}
        </Carousel>
      </div>
      {/* {data ? (
        <Link to={"/providers"} state={{ data: data }}>
          {data.data[0].id}
        </Link>
      ) : (
        <div>loading</div>
      )} */}
    </div>
  );
}

export default OurPro;
