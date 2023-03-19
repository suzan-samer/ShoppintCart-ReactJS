import React from "react";
import classes from "./AvailbleProducts.module.css";
import Card from "../UI/Card";
import ProductItem from "./ProductIteem/ProductItem";
const ProductDetails = [
  {
    id: "m1",
    name: "Pleated Shirt Dress",
    description:
      "A sleeker T-shirt. Made from a cotton rib-knit enhanced with modal for extra softness and a slim fit that hits just right",
    price: 22.99,
    image:
      "https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dw2d2edec7/hi-res/cm-295899025001_alternate2.jpg?sw=1000&sh=1250&sfrm=jpg",
  },
  {
    id: "m2",
    name: "Danielle Silk Dress",
    description: "A german specialty!",
    price: 16.5,
    image:
      "https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dw2317e6dd/hi-res/cm-295899022001_alternate2.jpg?sw=1000&sh=1250&sfrm=jpg",
  },
  {
    id: "m3",
    name: "Rib Sandwash Funnel Neck",
    description:
      "A sleeker T-shirt. Made from a cotton rib-knit enhanced with modal for extra softness and a slim fit that hits just right",
    price: 12.99,
    image:
      "https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dw4abd5e4d/hi-res/cm-295749447001_alternate2.jpg?sw=1000&sh=1250&sfrm=jpg",
  },
  {
    id: "m4",
    name: "Silk Print Button Down Shirt",
    description:
      "A sleeker T-shirt. Made from a cotton rib-knit enhanced with modal for extra softness and a slim fit that hits just right",
    price: 18.99,
    image:
      "https://www.clubmonaco.com/dw/image/v2/BGJB_PRD/on/demandware.static/-/Sites-masterCatalog_ClubMonaco/default/dw3430084c/hi-res/cm-295899028002_alternate2.jpg?sw=1000&sh=1250&sfrm=jpg",
  },
];

const AvailbleProducts = () => {
  const ProductList = ProductDetails.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.price}
      image={product.image}
    />
  ));
  return (
    <section className={classes.Products}>
      <Card>
        <ul>{ProductList}</ul>
      </Card>
    </section>
  );
};

export default AvailbleProducts;
