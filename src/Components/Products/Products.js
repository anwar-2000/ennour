import React from "react";
import Product from "../Product/Product";
import classes from "./Products.module.css";
import IMG1 from "../../assets/8Trous.png";
import IMG2 from "../../assets/8Trous.png";
import IMG3 from "../../assets/8Trous.png";
import IMG4 from "../../assets/8Trous.png";
import HeaderDivs from "../HeaderDiv/HeaderDivs";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "8 Trous (10 cm)",
    description:
      "lorem lorem lorem lorem lorem lorem loem lorem lorem loem loem lorem lorem"
  },
  {
    id: 2,
    image: IMG2,
    title: "8 Trous (7 cm)",
    description:
      "lorem lorem lorem lorem lorem lorem loem lorem lorem loem loem lorem lorem"
  },
  {
    id: 3,
    image: IMG3,
    title: "12 Trous",
    description:
      "lorem lorem lorem lorem lorem lorem loem lorem lorem loem loem lorem lorem"
  }
];
const Products = () => {
  return <>
    
    <HeaderDivs title=' Ennour Products' />
      <div className={classes.container} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
        {data.map((produit) => (
          <Product 
            key={produit.id}
            title={produit.title}
            image={produit.image}
            description={produit.description}
          />
        ))}
      </div>
      </>
  
};

export default Products;
