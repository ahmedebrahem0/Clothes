import React from "react";
import "animate.css";
// import "../../index"
import img1 from "../../img/vanilla.jpg";
import img4 from "../../img/home-img.png";
import { BsCircleFill } from "react-icons/bs";
import "./Home.module.css";
import { BsArrowUp } from "react-icons/bs";
export default function Products() {

  let api = [
    {
      item_id: "8568666620144",
      item_name: "Viscose Basic Shirt",
      price: "799.99",
      item_brand: "Carinawear",
      item_category: "XL  SM",
      item_variant: "45422697152752",
      imageURL:
        "	https://carinawear.com/cdn/shop/files/carinayara1513_400x.jpg?v=1726144668",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
    },

    {
      item_id: "8565336080624",
      item_name: "Overlapping Print Lounge",
      price: "799.99",
      item_brand: "Carinawear",
      item_category: "XXL XL ",
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
      item_variant: "45401469386992",
      imageURL:
        "https://carinawear.com/cdn/shop/files/carinayara1377_400x.jpg?v=1726144671",
      productURL:
        "https://carinawear.com/products/overlapping-print-lounge-t-shirt",
    },

    {
      item_id: "8565335982320",
      item_name: "Collared Neck Shirt Dress",
      price: "1999.99",
      item_brand: "Carinawear",
      item_category: "S M XL",
      item_variant: "45401468961008",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      imageURL:
        "	https://carinawear.com/cdn/shop/files/carinayara1607_400x.jpg?v=1726144683",
      productURL: "https://carinawear.com/products/collared-neck-shirt-dress",
    },

    {
      item_id: "8565335785712",
      item_name: "Satin Cargo Pants",
      price: "1099.99",
      item_brand: "Carinawear",
      item_category: "2XL XL",
      item_variant: "45401467420912",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-dark" />,
      color3: <BsCircleFill className="text-primary" />,
      imageURL:
        "	https://carinawear.com/cdn/shop/files/56077-01-S-3_400x.jpg?v=1727598385",
      productURL: "https://carinawear.com/products/satin-cargo-pants",
    },

    {
      item_id: "8556205605104",
      item_name: "Zebra Pattern Crepe Pants",
      price: "1099.99",
      item_brand: "Carinawear",
      item_category: "XXL 3XL",
      item_variant: "45331712508144",
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
      imageURL:
        "https://carinawear.com/cdn/shop/files/carinayara1190_400x.jpg?v=1726144132",
      productURL: "https://carinawear.com/products/zebra-pattern-crepe-pants",
    },

    {
      item_id: "8556205539568",
      item_name: "Zebra Pattern Crepe Blouse",
      price: "1099.99",
      item_brand: "Carinawear",
      item_category: "XL S",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
      item_variant: "45331711951088",
      imageURL:
        "https://carinawear.com/cdn/shop/files/carinayara1550_400x.jpg?v=1726144449",
      productURL: "https://carinawear.com/products/zebra-pattern-crepe-blouse",
    },

    {
      item_id: "8554110583024",
      item_name: "Gabardine Hip Length",
      price: "1299.99",
      item_brand: "Carinawear",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      item_category: "XXL XL",
      item_variant: "45311109103856",
      imageURL:
        "https://carinawear.com/cdn/shop/files/carinayara1596_400x.jpg?v=1726144642",
      productURL: "https://carinawear.com/products/gabardine-hip-length-shirt",
    },

    {
      item_id: "8554080600304",
      item_name: "Linen Hooded Long Kimono",
      price: "1399.99",
      item_brand: "Carinawear",
      color2: <BsCircleFill className="text-danger" />,
      color3: <BsCircleFill className="text-black" />,
      color4: <BsCircleFill className="text-light border rounded" />,
      item_category: "2XL M",
      item_variant: "45310765302000",
      imageURL:
        "	https://carinawear.com/cdn/shop/files/carinayara1099_400x.jpg?v=1726144684",
      productURL: "https://carinawear.com/products/linen-hooded-long-kimono",
    },

    {
      item_id: "8540317319408",
      item_name: "Summer Vibes Printed ",
      price: "799.99",
      item_brand: "Carinawear",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      item_category: "XL M",
      item_variant: "45202884231408",
      imageURL:
        "https://carinawear.com/cdn/shop/files/carinayara1106_400x.jpg?v=1726143662",
      productURL:
        "https://carinawear.com/products/summer-vibes-printed-t-shirt",
    },

    {
      item_id: "8540316860656",
      item_name: "Blue Wide Leg Jeans",
      price: "1599.99",
      item_brand: "Carinawear",
      item_category: "3XL 2XL",
      color1: <BsCircleFill className="text-primary" />,
      color2: <BsCircleFill className="text-info" />,
      color3: <BsCircleFill className="text-success" />,
      item_variant: "45202880889072",
      imageURL:
        "https://carinawear.com/cdn/shop/files/UntitledCatalog8870-Copy_400x.jpg?v=1724144390",
      productURL: "https://carinawear.com/products/blue-wide-leg-jeans",
    },

    {
      item_id: "8533128773872",
      item_name: "Wide Strap Ribbed Dress",
      price: "499.99",
      item_brand: "Carinawear",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-dark" />,
      item_category: "S M",
      item_variant: "45180165062896",
      imageURL:
        "https://carinawear.com/cdn/shop/files/DSC06301_400x.jpg?v=1723709558",
      productURL: "https://carinawear.com/products/wide-strap-ribbed-dress",
    },

    {
      item_id: "8533127823600",
      item_name: "Black Lounge Jogger",
      price: "799.99",
      item_brand: "Carinawear",
      item_category: "XXL XL",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
      item_variant: "45180159656176",
      imageURL:
        "https://carinawear.com/cdn/shop/files/UntitledCatalog8864_400x.jpg?v=1724330955",

      productURL: "https://carinawear.com/products/black-lounge-jogger",
    },

    {
      item_id: "8533127463152",
      item_name: "Lounge T-Shirt with Tulle",
      price: "699.99",
      item_brand: "Carinawear",
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
      item_category: "3XL 2XL",
      item_variant: "45180157231344",
      imageURL:
        "https://carinawear.com/cdn/shop/files/UntitledCatalog9261_400x.jpg?v=1724331067",
      productURL: "https://carinawear.com/products/lounge-t-shirt-with-tulle",
    },

    {
      item_id: "8533127201008",
      item_name: "Viscose Classic Shirt",
      price: "999.99",
      item_brand: "Carinawear",
      item_category: "XL L",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-dark" />,
      item_variant: "45180155592944",
      imageURL:
        "https://carinawear.com/cdn/shop/files/DSC06079_400x.jpg?v=1723711209",
      productURL: "https://carinawear.com/products/viscose-classic-shirt",
    },

    {
      item_id: "8533127168240",
      item_name: "Satin Dropped Shoulder ",
      price: "1299.99",
      item_brand: "Carinawear",
      item_category: "",
      item_variant: "45180154609904",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-light border rounded" />,
      color3: <BsCircleFill className="text-primary" />,
      imageURL:
        "	https://carinawear.com/cdn/shop/files/UntitledCatalog8883-Copy_400x.jpg?v=1723974213",
      productURL:
        "https://carinawear.com/products/satin-dropped-shoulder-kimono",
    },

    {
      item_id: "8533127102704",
      item_name: "Chest Print Lounge ",
      price: "799.99",
      color1: <BsCircleFill className="text-primary" />,
      color2: <BsCircleFill className="text-info" />,
      color3: <BsCircleFill className="text-success" />,
      item_brand: "Carinawear",
      item_category: "XL M",
      item_variant: "45180154446064",
      imageURL:
        "	https://carinawear.com/cdn/shop/files/DSC06006_400x.jpg?v=1723711879",
      productURL: "https://carinawear.com/products/chest-print-lounge-t-shirt",
    },

    {
      item_id: "8533127069936",
      item_name: "Black Printed Voile Shirt",
      price: "799.99",
      item_brand: "Carinawear",
      item_category: "L M",
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
      item_variant: "45180154282224",
      imageURL:
        "	https://carinawear.com/cdn/shop/files/DSC00271_400x.jpg?v=1722239262",
      productURL: "https://carinawear.com/products/black-printed-voile-shirt",
    },

    {
      item_id: "8533127037168",
      item_name: "Black Printed Voile Kimono",
      price: "999.99",
      item_brand: "Carinawear",
      item_category: " 2XL XL ",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-dark" />,
      color3: <BsCircleFill className="text-primary" />,
      item_variant: "45180154151152",
      imageURL:
        "	https://carinawear.com/cdn/shop/files/DSC02139_400x.jpg?v=1721636005",
      productURL: "https://carinawear.com/products/black-printed-voile-kimono",
    },

    {
      item_id: "8533126971632",
      item_name: "Tweety Printed T-Shirt",
      price: "599.99",
      item_brand: "Carinawear",
      color1: <BsCircleFill className="text-primary" />,
      color2: <BsCircleFill className="text-info" />,
      color3: <BsCircleFill className="text-success" />,
      item_category: "L M",
      item_variant: "45180153987312",
      imageURL:
        "	https://carinawear.com/cdn/shop/files/DSC00265_400x.jpg?v=1722240588",
      productURL: "https://carinawear.com/products/tweety-printed-t-shirt",
    },

    {
      item_id: "8533126873328",
      item_name: "Cotton Comfy Slip On Top",
      price: "799.99",
      item_brand: "Carinawear",
      item_category: "XL L",
      color1: <BsCircleFill className="text-danger" />,
      color2: <BsCircleFill className="text-dark" />,
      color3: <BsCircleFill className="text-primary" />,
      item_variant: "45180152545520",
      imageURL:
        "https://carinawear.com/cdn/shop/files/UntitledCatalog8897_400x.jpg?v=1723974168",
      productURL: "https://carinawear.com/products/cotton-comfy-slip-on-top",
    },

    {
      item_id: "8533126807792",
      item_name: "Blue Denim Long Shirt",
      price: "1499.99",
      item_brand: "Carinawear",
      color2: <BsCircleFill className="text-success" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
      item_category: "M S",
      item_variant: "45180152185072",
      imageURL:
        "https://carinawear.com/cdn/shop/files/DSC09957_400x.jpg?v=1721139707",
      productURL: "https://carinawear.com/products/blue-denim-long-shirt",
    },

    {
      item_id: "8533126775024",
      item_name: "Snap Closure Lounge ",
      price: "1499.99",
      item_brand: "Carinawear",
      item_category: "3XL 2XL",
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-primary" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
      item_variant: "45180152021232",
      imageURL:
        "https://carinawear.com/cdn/shop/files/4X1A3922_7_lg_Custom_400x.jpg?v=1721649596",
      productURL: "https://carinawear.com/products/snap-closure-lounge-jacket",
    },

    {
      item_id: "8533126742256",
      item_name: "Beige Cotton Lounge ",
      price: "999.99",
      item_brand: "Carinawear",
      color2: <BsCircleFill className="text-danger" />,
      color3: <BsCircleFill className="text-light border rounded" />,
      color4: <BsCircleFill className="text-info border rounded" />,
      item_category: "XL L",
      item_variant: "45180151824624",
      imageURL:
        "https://carinawear.com/cdn/shop/files/heather-grey-cotton-t-shirt-carina--1_400x.jpg?v=1721264532",
      productURL: "https://carinawear.com/products/beige-cotton-lounge-jogger",
    },

    {
      item_id: "8533126709488",
      item_name: "Hooded Denim Jacket",
      price: "2299.99",
      item_brand: "Carinawear",
      color2: <BsCircleFill className="text-warning" />,
      color3: <BsCircleFill className="text-black" />,
      color4: (
        <BsCircleFill className="text-light border rounded border rounded" />
      ),
      item_category: "XL L",
      item_variant: "45180151660784",
      imageURL:
        "https://carinawear.com/cdn/shop/files/oversized-plain-lounge-t-shirt-carina--1_400x.jpg?v=1719448724",
      productURL: "https://carinawear.com/products/hooded-denim-jacket",
    },

    // {
    //   item_id: "8533126676720",
    //   item_name: "Drawstring Cuffs Parachute Pants",
    //   price: "1399.99",
    //   item_brand: "Carinawear",
    //   item_category: "S M",
    //   color2: <BsCircleFill className="text-danger" />,
    //   color3: <BsCircleFill className="text-primary" />,
    //   color4: <BsCircleFill className="text-success border rounded" />,
    //   item_variant: "45180151398640",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/carina3.high-11_grande.jpg?v=1710412147",
    //   productURL:
    //     "https://carinawear.com/products/drawstring-cuffs-parachute-pants",
    // },

    // {
    //   item_id: "8533126611184",
    //   item_name: "Ribbed Edges Lounge ",
    //   price: "1099.99",
    //   item_brand: "Carinawear",
    //   item_category: "2XL XL",
    //   color2: <BsCircleFill className="text-warning" />,
    //   color3: <BsCircleFill className="text-primary" />,
    //   color4: (
    //     <BsCircleFill className="text-light border rounded border rounded" />
    //   ),
    //   item_variant: "45180150546672",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/carina3.high-32_grande.jpg?v=1710412146",
    //   productURL:
    //     "https://carinawear.com/products/ribbed-edges-lounge-sweatshirt",
    // },

    // {
    //   item_id: "8507840463088",
    //   item_name: "Printed Dress with Front Slit",
    //   price: "1299.99",
    //   item_brand: "Carinawear",
    //   color2: <BsCircleFill className="text-info" />,
    //   color3: <BsCircleFill className="text-light border rounded" />,
    //   color4: <BsCircleFill className="text-warning border rounded" />,
    //   item_category: "3XL 2XL",
    //   item_variant: "45114882457840",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/20240223-20240223-091_grande.jpg?v=1710412074",
    //   productURL:
    //     "https://carinawear.com/products/printed-dress-with-front-slit",
    // },

    // {
    //   item_id: "8507840332016",
    //   item_name: "Back Eye Embroidery ",
    //   price: "1199.99",
    //   item_brand: "Carinawear",
    //   color1: <BsCircleFill className="text-danger" />,
    //   color2: <BsCircleFill className="text-light border rounded" />,
    //   color3: <BsCircleFill className="text-primary" />,
    //   item_category: "XL L",
    //   item_variant: "45114882162928",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/ramadan-22-_carina-size_grande.jpg?v=1710679596",
    //   productURL: "https://carinawear.com/products/back-eye-embroidery-kimono",
    // },

    // {
    //   item_id: "8496613163248",
    //   item_name: "Leopard Print Chiffon Kimono",
    //   price: "1299.99",
    //   item_brand: "Carinawear",
    //   color1: <BsCircleFill className="text-light border rounded" />,
    //   color2: <BsCircleFill className="text-dark" />,
    //   // color3: <BsCircleFill className="text-primary" />,
    //   item_category: "L M",
    //   item_variant: "45070598537456",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/carina3.high-289_grande.jpg?v=1710411787",
    //   productURL:
    //     "https://carinawear.com/products/leopard-print-chiffon-kimono",
    // },

    // {
    //   item_id: "8496613130480",
    //   item_name: "Crepe Shirt with Chest Pocket",
    //   price: "799.99",
    //   item_brand: "Carinawear",
    //   item_category: " S M",
    //   color1: <BsCircleFill className="text-info" />,
    //   color2: <BsCircleFill className="text-warning" />,
    //   color3: <BsCircleFill className="text-primary" />,
    //   item_variant: "45070598406384",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55322-34-S_4_grande.jpg?v=1710411780",
    //   productURL:
    //     "https://carinawear.com/products/crepe-shirt-with-chest-pocket",
    // },

    // {
    //   item_id: "8496613064944",
    //   item_name: "Draped Chiffon Kimono Shirt",
    //   price: "1199.99",
    //   item_brand: "Carinawear",
    //   color1: <BsCircleFill className="text-warning" />,
    //   color2: <BsCircleFill className="text-light border rounded" />,
    //   color3: <BsCircleFill className="text-info" />,
    //   item_category: "3XL 2XL",
    //   item_variant: "45070597947632",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55256-34-SM_1_grande.jpg?v=1710411780",
    //   productURL: "https://carinawear.com/products/draped-chiffon-kimono",
    // },

    // {
    //   item_id: "8496613032176",
    //   item_name: "Striped Full Placket Long Shirt",
    //   price: "899.99",
    //   item_brand: "Carinawear",
    //   color1: <BsCircleFill className="text-danger" />,
    //   color2: <BsCircleFill className="text-dark" />,
    //   color3: <BsCircleFill className="text-primary" />,
    //   item_category: "S L",
    //   item_variant: "45070597685488",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55359-15-S_1_grande.jpg?v=1710411727",
    //   productURL:
    //     "https://carinawear.com/products/striped-full-placket-long-shirt",
    // },

    // {
    //   item_id: "8496612966640",
    //   item_name: "Georgette Loose Fit Dress",
    //   price: "1299.99",
    //   item_brand: "Carinawear",
    //   color2: <BsCircleFill className="text-warning" />,
    //   color3: <BsCircleFill className="text-primary" />,
    //   color4: (
    //     <BsCircleFill className="text-light border rounded border rounded" />
    //   ),
    //   item_category: "M L",
    //   item_variant: "45070597095664",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/54978-32-SM-2_grande.jpg?v=1710411726",
    //   productURL: "https://carinawear.com/products/georgette-loose-fit-dress",
    // },

    // {
    //   item_id: "8496612933872",
    //   item_name: "Voile Straight Cut Pants",
    //   price: "799.99",
    //   color2: <BsCircleFill className="text-danger" />,
    //   color3: <BsCircleFill className="text-black" />,
    //   color4: (
    //     <BsCircleFill className="text-light border rounded border rounded" />
    //   ),
    //   item_brand: "Carinawear",
    //   item_category: "XL L",
    //   item_variant: "45070596997360",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55029-15-S-2_grande.jpg?v=1710411728",
    //   productURL: "https://carinawear.com/products/voile-straight-cut-pants",
    // },

    // {
    //   item_id: "8496611066096",
    //   item_name: "Tassels Hem Open Front ",
    //   price: "1399.99",
    //   item_brand: "Carinawear",
    //   item_category: "2XL 3XL ",
    //   color1: <BsCircleFill className="text-danger" />,
    //   color2: <BsCircleFill className="text-dark" />,
    //   color3: <BsCircleFill className="text-primary" />,
    //   item_variant: "45070586446064",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/ramadan-4_carinasize_grande.jpg?v=1710411674",
    //   productURL:
    //     "https://carinawear.com/products/tassels-hem-open-front-kimono",
    // },

    // {
    //   item_id: "8496611000560",
    //   item_name: "Slip On Hooded Dress",
    //   price: "1299.99",
    //   item_brand: "Carinawear",
    //   color1: <BsCircleFill className="text-danger" />,
    //   color2: <BsCircleFill className="text-success" />,
    //   color3: <BsCircleFill className="text-light border rounded" />,
    //   item_category: "2XL  3XL",
    //   item_variant: "45070586085616",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/ramadan-25-_carina-size_grande.jpg?v=1710679952",
    //   productURL: "https://carinawear.com/products/slip-on-hooded-dress",
    // },

    // {
    //   item_id: "8496610967792",
    //   item_name: "Printed Flowy Kimono",
    //   price: "999.99",
    //   item_brand: "Carinawear",
    //   color1: <BsCircleFill className="text-warning" />,
    //   color2: <BsCircleFill className="text-dark" />,
    //   color3: <BsCircleFill className="text-info" />,
    //   item_category: "L M",
    //   item_variant: "45070585889008",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55070-99-OS-1_grande.jpg?v=1710411673",
    //   productURL: "https://carinawear.com/products/printed-flowy-kimono",
    // },

    // {
    //   item_id: "8496610935024",
    //   item_name: "3 Colors Oversized Kimono",
    //   price: "999.99",
    //   item_brand: "Carinawear",
    //   color1: <BsCircleFill className="text-dark" />,
    //   color2: <BsCircleFill className="text-info" />,
    //   color3: <BsCircleFill className="text-warning" />,
    //   item_category: "M S",
    //   item_variant: "45070585856240",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55089-01-OS-1_grande.jpg?v=1710411632",
    //   productURL: "https://carinawear.com/products/3-colors-oversized-kimono",
    // },

    // {
    //   item_id: "8496610869488",
    //   item_name: "Striped Dress with Hooded ",
    //   price: "1299.99",
    //   item_brand: "Carinawear",
    //   color1: <BsCircleFill className="text-light border rounded" />,
    //   color2: <BsCircleFill className="text-dark" />,
    //   // color3: <BsCircleFill className="text-primary" />,
    //   item_category: "L M",
    //   item_variant: "45070585626864",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/ramadan-7-_carina-size_grande.jpg?v=1710679904",
    //   productURL:
    //     "https://carinawear.com/products/striped-dress-with-hooded-neck",
    // },

    // {
    //   item_id: "8496610836720",
    //   item_name: "Cotton Wide Leg Lounge ",
    //   price: "1099.99",
    //   item_brand: "Carinawear",
    //   item_category: "XL M",
    //   item_variant: "45070585528560",
    //   color2: <BsCircleFill className="text-danger" />,
    //   color3: <BsCircleFill className="text-black" />,
    //   color4: (
    //     <BsCircleFill className="text-light border rounded border rounded" />
    //   ),
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55106-15-S-1_grande.jpg?v=1710411633",
    //   productURL:
    //     "https://carinawear.com/products/cotton-wide-leg-lounge-pants",
    // },

    // {
    //   item_id: "8495007891696",
    //   item_name: "One Size Poncho Shirt",
    //   price: "799.99",
    //   color1: <BsCircleFill className="text-danger" />,
    //   color2: <BsCircleFill className="text-warning" />,
    //   color3: <BsCircleFill className="text-light border rounded" />,
    //   item_brand: "Carinawear",
    //   item_category: "M S",
    //   item_variant: "45065534374128",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55129-99-OS-1_grande.jpg?v=1710411582",
    //   productURL: "https://carinawear.com/products/one-size-poncho-shirt",
    // },

    // {
    //   item_id: "8495007793392",
    //   item_name: "Black Voile Sleeveless ",
    //   price: "299.99",
    //   item_brand: "Carinawear",
    //   color3: <BsCircleFill className="text-primary" />,
    //   color1: <BsCircleFill className="text-danger" />,
    //   color2: <BsCircleFill className="text-dark" />,
    //   item_category: "3XL 2XL",
    //   item_variant: "45065534111984",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55131-01-S-1_grande.jpg?v=1710411557",
    //   productURL:
    //     "https://carinawear.com/products/black-voile-sleeveless-blouse",
    // },

    // {
    //   item_id: "8495007727856",
    //   item_name: "Colored Chiffon Long Shirt",
    //   price: "899.99",
    //   item_brand: "Carinawear",
    //   item_category: "2XL XL",
    //   color1: <BsCircleFill className="text-info" />,
    //   color2: <BsCircleFill className="text-success" />,
    //   item_variant: "45065533915376",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55130-99-S_5_grande.jpg?v=1710411557",
    //   productURL: "https://carinawear.com/products/colored-chiffon-long-shirt",
    // },

    // {
    //   item_id: "8495007596784",
    //   item_name: "Perforated Long Sleeves ",
    //   price: "1199.99",
    //   item_brand: "Carinawear",
    //   item_category: "S M",
    //   color1: <BsCircleFill className="text-dark" />,
    //   color2: <BsCircleFill className="text-info" />,
    //   color3: <BsCircleFill className="text-warning" />,
    //   item_variant: "45065532997872",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55171-01-S_5_grande.jpg?v=1710411483",
    //   productURL:
    //     "https://carinawear.com/products/perforated-long-sleeves-shirt",
    // },

    // {
    //   item_id: "8495007564016",
    //   item_name: "Colored V-Neck Dress",
    //   price: "1399.99",
    //   item_brand: "Carinawear",
    //   color1: <BsCircleFill className="text-light border rounded" />,
    //   color2: <BsCircleFill className="text-info" />,
    //   color3: <BsCircleFill className="text-primary" />,
    //   item_category: "M L",
    //   item_variant: "45065532866800",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/ramadan-10-copy_7092aa00-530c-4b6d-86cd-79d8da6b641e_grande.jpg?v=1710679261",
    //   productURL: "https://carinawear.com/products/colored-v-neck-dress",
    // },

    // {
    //   item_id: "8495007531248",
    //   item_name: "Pleated Open Neckline ",
    //   price: "1299.99",
    //   item_brand: "Carinawear",
    //   color2: <BsCircleFill className="text-danger" />,
    //   color3: <BsCircleFill className="text-black" />,
    //   color4: (
    //     <BsCircleFill className="text-light border rounded border rounded" />
    //   ),
    //   item_category: "L S",
    //   item_variant: "45065532768496",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55204-58-SM-1_grande.jpg?v=1710411482",
    //   productURL:
    //     "https://carinawear.com/products/pleated-open-neckline-kimono",
    // },

    // {
    //   item_id: "8492838813936",
    //   item_name: "V-Neck Wide Leg Jumpsuit",
    //   price: "999.99",
    //   item_brand: "Carinawear",
    //   color1: <BsCircleFill className="text-danger" />,
    //   color2: <BsCircleFill className="text-dark" />,
    //   color3: <BsCircleFill className="text-primary" />,
    //   item_category: "XL M",
    //   item_variant: "45056406978800",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55127-58-S-1_grande.jpg?v=1710411242",
    //   productURL: "https://carinawear.com/products/v-neck-wide-leg-jumpsuit",
    // },

    // {
    //   item_id: "8492124078320",
    //   item_name: "Black Sports Leggings",
    //   color2: <BsCircleFill className="text-warning" />,
    //   color3: <BsCircleFill className="text-primary" />,
    //   color4: (
    //     <BsCircleFill className="text-light border rounded border rounded" />
    //   ),
    //   price: "899.99",
    //   item_brand: "Carinawear",
    //   item_category: "2XL M",
    //   item_variant: "45053984964848",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55396-01-S-1_grande.jpg?v=1710411032",
    //   productURL: "https://carinawear.com/products/black-sports-leggings",
    // },

    // {
    //   item_id: "8492124012784",
    //   item_name: "Denim Vest with Zipper Slits",
    //   price: "1299.99",
    //   item_brand: "Carinawear",
    //   item_category: "3XL XL",
    //   color2: <BsCircleFill className="text-info" />,
    //   color3: <BsCircleFill className="text-danger" />,
    //   color4: <BsCircleFill className="text-success border rounded" />,
    //   item_variant: "45053984735472",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55299-46-S-2_grande.jpg?v=1710410979",
    //   productURL:
    //     "https://carinawear.com/products/denim-vest-with-zipper-slits",
    // },

    // {
    //   item_id: "8492123980016",
    //   item_name: "Voile Bell Sleeves Blouse",
    //   price: "499.99",
    //   item_brand: "Carinawear",
    //   // color2: <BsCircleFill className="text-danger" />,
    //   color3: <BsCircleFill className="text-black" />,
    //   color4: (
    //     <BsCircleFill className="text-light border rounded border rounded" />
    //   ),
    //   item_category: "XL M",
    //   item_variant: "45053984440560",
    //   imageURL:
    //     "https://carinawear.com/cdn/shop/files/55199-48-S-2_grande.jpg?v=1710410979",
    //   productURL: "https://carinawear.com/products/voile-bell-sleeves-blouse",
    // },
  ];
  return (
    <div className="home text-center info text-light border rounded">
      <a
        className="btnUp d-flex justify-content-center align-items-center "
        href="#up"
      >
        <BsArrowUp id="#up" />
      </a>
      <section className="mb-5">
        <div
          className="img-fluid  row m-0 mb-5 p-0  d-flex "
          // style={{
          //   width: "100%",
          //   backgroundImage: `url(${img4})`,
          //   // height: "100vh",
          //   backgroundPosition: "center center",
          //   backgroundSize: "100% 100%",
          // }}
        >
          <div className="col-md-12 mb-4 ">
            <img src={img4} alt="" class="w-25" />
          </div>
          <div className=" col-md-12 ">
            <h1 className="animate__rubberBand animate__animated text-dark">
              Team Name
            </h1>
            <h2 className="animate__rubberBand animate__animated text-dark">
              اريج إبراهيم البسيسي
            </h2>
            <h2 className="animate__rubberBand animate__animated text-dark">
              فتون محمد البسيسي
            </h2>
            <h2 className="animate__rubberBand animate__animated text-dark">
              بشاير ابراهيم الارينبي
            </h2>
            <h2 className="animate__rubberBand animate__animated text-dark ">
              اوصاف سلمان الطقطقي
            </h2>

            {/* <a
            href="#more"
            className="btn-home mt-3 animate__bounce animate__animated text-decoration-none"
          >
            See more
          </a> */}
          </div>

          {/* <img src={img1} alt="" /> */}
        </div>
      </section>
      {/*  */}

      {/*  */}
      <section>
        <div className="container-floud my-5">
          <h2 className="text-center">Collections</h2>
          <div className=" row m-0 p-0 d-flex justify-content-center align-items-center">
            {api.map((val, index) => {
              return (
                <div
                  className="col-md-3 product-item mx-2 mb-3  mt-3 shop overflow-hidden "
                  key={index}
                >
                  <div className="overflow-hidden animate__fadeInDown anima animate__animated">
                    <img
                      src={val.imageURL}
                      alt=""
                      className="w-100"
                      height="350px !important"
                    />
                  </div>
                  <div>
                    <h6 className="text-black">{val.item_name}</h6>
                    <h6 className="text-black">
                      <span>L.E </span>
                      {val.price}
                    </h6>
                    <h6 className="border text-black w-25 text-center m-auto">
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
      </section>
    </div>
  );
}
