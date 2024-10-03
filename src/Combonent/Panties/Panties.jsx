    import React from 'react'
import { BsArrowUp } from "react-icons/bs";
    export default function Panties() {
        let api = [
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/56139-60-S-2_400x.jpg?v=1727621055",
            imageWidth: 779.99,
            source: "Pack of 10 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/carinayara0951_400x.jpg?v=1726143817",
            imageWidth: 3409.99,
            source: "Pack of 3 Colored Brief Panties",
          },
          {
            imageUrl:
              "	https://carinawear.com/cdn/shop/files/carinayara0976_400x.jpg?v=1726143906",
            imageWidth: 4099.99,
            source: "Pack of 3 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/carinayara0917_400x.jpg?v=1726756263",
            imageWidth: 479.99,
            source: "Pack of 3 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/carinayara0875_400x.jpg?v=1726143676",
            imageWidth: 559.99,
            source: "Pack of 3 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/carinayara0968_400x.jpg?v=1726143773",
            imageWidth: 889.99,
            source: "Pack of 3 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/UntitledCatalog8730_400x.jpg?v=1724143988",
            imageWidth: 999.99,
            source: "Pack of 5 Colored Brief Panties",
          },
          {
            imageUrl:
              "	https://carinawear.com/cdn/shop/files/UntitledCatalog8757_400x.jpg?v=1724146379",
            imageWidth: 359.99,
            source: "Pack of 3 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/UntitledCatalog8777_400x.jpg?v=1724331015",
            imageWidth: 669.99,
            source: "Pack of 3 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/UntitledCatalog8770_400x.jpg?v=1724331037",
            imageWidth: 4409.99,
            source: "Pack of 7 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/voile-colored-robe-carina--1_400x.jpg?v=1717028444",
            imageWidth: 777.99,
            source: "Pack of 5 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/files/cotton-pyjama-jumpsuit-carina--1_400x.jpg?v=1713497154",
            imageWidth: 919.99,
            source: "Pack of 5 Colored Brief Panties",
          },
          {
            imageUrl:
              "https://carinawear.com/cdn/shop/products/velvet-long-sleeves-robe-carina--1_400x.jpg?v=1713382540",
            imageWidth: 229.99,
            source: "Lace Bikini Panty",
          },
          {
            imageUrl:
              "	https://carinawear.com/cdn/shop/files/velvet-long-sleeves-robe-carina--1_400x.jpg?v=1713492713",
            imageWidth: 119.99,
            source: "Cotton Thong Panty with Lace",
          },
          {
            imageUrl:
              "	https://carinawear.com/cdn/shop/products/velvet-long-sleeves-robe-carina--1_400x.jpg?v=1713382540",
            imageWidth: 229.99,
            source: "Cotton Thong Panty with Lace",
          },
        
        ];
    return (
      <>
        <div className="text-center info text-light">
          <a
            className="btnUp d-flex justify-content-center align-items-center"
            href="#up"
          >
            <BsArrowUp id="#up" />
          </a>
          <div className="container-floud">
            <h2 className="text-center  py-3">Robes</h2>
            <div className="row m-0 p-0 d-flex justify-content-center align-items-center">
              {api.map((val, index) => {
                return (
                  <div
                    className="col-md-3 product-item mx-2 mb-3  p-0  mt-3 shop overflow-hidden"
                    key={index}
                  >
                    <div className="animate__fadeInLeft anima animate__animated overflow-hidden mt-3">
                      <img
                        src={val.imageUrl}
                        alt=""
                        className="w-100"
                        height="350px"
                      />
                    </div>
                    <div>
                      <h6 className="text-dark">{val.source}</h6>
                      <h6 className="text-dark">
                        <span className="span">L.E </span>
                        {val.imageWidth}
                      </h6>
                      <h6 className="border text-dark w-25 text-center m-auto">
                        {val.item_category}
                      </h6>
                      <div className="animate__animated animate__shakeX d-flex justify-content-evenly align-items-center border w-25 m-auto">
                        <p className="m-0">{val.color1}</p>
                        <p className="m-0">{val.color2}</p>
                        <p className="m-0">{val.color3}</p>
                        <p className="m-0">{val.color4}</p>
                        </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
    }
