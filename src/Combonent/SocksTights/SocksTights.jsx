import React from "react";
import { BsCircleFill } from "react-icons/bs";
import "animate.css";
import { BsArrowUp } from "react-icons/bs";
export default function Pajamas() {
  let api = [
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/56047-13-SM-3_400x.jpg?v=1727600992",
      imageWidth: 999.99,
      source: "Plunge Neck Viscose Nightgown",
      item_category: "XL M",
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/56136-01-S-4_400x.jpg?v=1727621006",
      imageWidth: 999.99,
      source: "Nicki Pasqualone",
      item_category: "2XL 3XL ",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/1-5_400x.jpg?v=1727600705",
      imageWidth: 999.99,
      source: "Printed Midi Length Robe",
      item_category: "M L",
      color1: <BsCircleFill className="text-info" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-light border rounded" />,
    },

    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/carinayara1817_400x.jpg?v=1727600985",
      imageWidth: 1999.99,
      source: "Front Criss Cross Nightgown",
      item_category: "3XL XL",
      color1: <BsCircleFill className="text-success" />,
      color2: <BsCircleFill className="text-danger" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/carinayara1849_400x.jpg?v=1727004370",
      imageWidth: 999.99,
      source: "Voile Printed Pyjama Short",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      item_category: "L S",
    },
    {
      imageUrl:
        "	https://carinawear.com/cdn/shop/files/carinayara2050_400x.jpg?v=1727004066",
      imageWidth: 1.999,
      source: "Frilled Short Sleeves Nightgown",
      color2: <BsCircleFill className="text-success" />,
      color3: <BsCircleFill className="text-light border rounded" />,
      color4: <BsCircleFill className="text-info border rounded" />,
      item_category: "2XL 3XL",
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/56094-01-SM-3_400x.jpg?v=1727598446",
      imageWidth: 2.999,
      source: "Plunge V-Neck Printed Nightgown",
      item_category: "XL M",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      // color4: (
      //   <BsCircleFill className="text-light border rounded border rounded" />
      // ),
    },
    // {
    //   imageUrl:
    //     "https://carinawear.com/cdn/shop/files/20240223-20240223-046_400x.jpg?v=1710413101",
    //   imageWidth: 1.9999,
    //   source: "Simple & Delicate Pyjama Set",
    //   item_category: "S M",
    //   color1: <BsCircleFill className="text-dark" />,
    //   color2: <BsCircleFill className="text-warning" />,
    //   color3: <BsCircleFill className="text-primary" />,
    // },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/carinayara2017_400x.jpg?v=1726568963",
      imageWidth: 2.0999,
      source: "Square Neck Short Nightgown ",
      item_category: "XL M",
      color1: <BsCircleFill className="text-success" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/carinayara1710_200x.jpg?v=1726568918",
      imageWidth: 1.0999,
      source: "Plunge V-Neck Nightgown",
      item_category: "L M",
      color1: <BsCircleFill className="text-warning" />,
      color2: <BsCircleFill className="text-success border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/carinayara2003_400x.jpg?v=1726568957",
      imageWidth: 1.2999,
      source: "Nightgown with Frilled Edges",
      item_category: "S M",
      color1: <BsCircleFill className="text-dark" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-danger" />,
    },
    // {
    //   imageUrl:
    //     "https://carinawear.com/cdn/shop/files/20240223-20240223-122_eaee8e3b-67b7-401f-8c2f-19b33e7a8bf0_400x.jpg?v=1710412927",
    //   imageWidth: 1.2,
    //   source: "Wide Leg Pyjama Pants",
    //   item_category: "2XL 3XL",
    //   // color1: <BsCircleFill className="text-danger" />,
    //   color2: <BsCircleFill className="text-warning" />,
    //   color3: <BsCircleFill className="text-primary" />,
    //   color4: (
    //     <BsCircleFill className="text-light border rounded border rounded" />
    //   ),
    // },
    // {
    //   imageUrl:
    //     "https://carinawear.com/cdn/shop/files/20240223-20240223-137_dda8d9d5-f5de-4fef-9307-aa0227fe052a_400x.jpg?v=1710412928",
    //   imageWidth: 1.3,
    //   source: "Self Print Pyjama Short",
    //   item_category: "XL L",
    //   color1: <BsCircleFill className="text-danger" />,
    //   color2: <BsCircleFill className="text-warning" />,
    //   color3: <BsCircleFill className="text-primary" />,
    // },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/carinayara1200_200x.jpg?v=1726149298",
      imageWidth: 1.3,
      source: "Lilac Piping Pyjama Set",
      item_category: "3XL 2XL",
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
    },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/56077-01-S-3_200x.jpg?v=1727598385",
      imageWidth: 88.9999,
      source: "Satin Drop Shoulder Robe",
      color2: <BsCircleFill className="text-success" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
      item_category: "M L",
    },
    // {
    //   imageUrl:
    //     "https://carinawear.com/cdn/shop/files/v-back-neck-pyjama-set-carina--1-32716554993904_400x.jpg?v=1703606480",
    //   imageWidth: 1200.9999,
    //   source: "V-Back Neck Pyjama",
    //   color2: <BsCircleFill className="text-success" />,
    //   color3: <BsCircleFill className="text-primary" />,
    //   color4: (
    //     <BsCircleFill className="text-danger border rounded border rounded" />
    //   ),
    //   item_category: "XL M",
    // },
    {
      imageUrl:
        "https://carinawear.com/cdn/shop/files/carinayara1208_400x.jpg?v=1726150282",
      imageWidth: 799.988,
      source: "Spaghetti Straps Lace  ",
      item_category: "XL M",
      // color1: <BsCircleFill className="text-danger" />,
      // color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color1: <BsCircleFill className="text-success" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
    },
    // {
    //   imageUrl:
    //     "https://carinawear.com/cdn/shop/files/sleeveless-cami-pyjama-top-carina--6-32647464812784_400x.jpg?v=1706783314",
    //   imageWidth: 1200.9999,
    //   source: "Sleeveless Cami Pyjama ",
    //   item_category: "2XL 3XL",
    //   color1: <BsCircleFill className="text-dark" />,
    //   color2: <BsCircleFill className="text-light border rounded" />,
    //   color3: <BsCircleFill className="text-danger" />,
    // },
    // {
    //   imageUrl:
    //     "https://carinawear.com/cdn/shop/files/solid-pyjama-jumpsuit-carina--1-32647452033264_400x.jpg?v=1703606276",
    //   imageWidth: 1800.9999,
    //   source: "Solid Pyjama Jumpsuit",
    //   item_category: "3XL 2XL ",
    //   color1: <BsCircleFill className="text-danger" />,
    //   color2: <BsCircleFill className="text-warning" />,
    //   color3: <BsCircleFill className="text-primary" />,
    // },
    {
      imageUrl:
        "	https://carinawear.com/cdn/shop/files/carinayara1559_400x.jpg?v=1726149288",
      imageWidth: 399.99,
      source: "Elasticated Pyjama Crop ",
      item_category: "XL M",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
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
          <h2 className="text-center  py-3">Bridal Collection</h2>
          <div className="row row m-0 p-0 d-flex justify-content-center align-items-center">
            {api.map((val, index) => {
              return (
                <div
                  className="col-md-3 mb-3 product-item mx-2  mt-3 shop overflow-hidden"
                  key={index}
                >
                  <div className="animate__fadeInUp anima animate__animated overflow-hidden  mt-3">
                    <img
                      src={val.imageUrl}
                      alt=""
                      className="w-100"
                      height="350px"
                    />
                  </div>
                  <div>
                    <h6 className="text-black">{val.source}</h6>
                    <h6 className="text-black ">
                      <span>L.E </span>
                      {val.imageWidth}
                    </h6>
                    <h6 className="border text-black w-25 text-center m-auto">
                      {val.item_category}
                    </h6>
                    <div className="d-flex justify-content-evenly animate__animated animate__shakeX align-items-center border w-25 m-auto">
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
