import React from "react";
import Product from "../Product/Product";
import classes from "./Products.module.css";
import IMG1 from "../../assets/8Trous.png";
import IMG2 from "../../assets/8Trous.png";
import IMG3 from "../../assets/8Trous.png";
import ficheTB8_7 from '../../assets/B8_7.jpg'
import ficheTB8_10 from '../../assets/B8 10.jpg'
import ficheTB12 from '../../assets/B12.jpg'
import HeaderDivs from "../HeaderDiv/HeaderDivs";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "8 Trous (10 cm)",
    description:
      "lorem lorem lorem lorem lorem lorem loem lorem lorem loem loem lorem lorem",
      ficheTech : ficheTB8_10

  },
  {
    id: 2,
    image: IMG2,
    title: "8 Trous (7 cm)",
    description:
      "lorem lorem lorem lorem lorem lorem loem lorem lorem loem loem lorem lorem",
      ficheTech : ficheTB8_7
  },
  {
    id: 3,
    image: IMG3,
    title: "12 Trous",
    description:
      "lorem lorem lorem lorem lorem lorem loem lorem lorem loem loem lorem lorem",
      ficheTech : ficheTB12
      
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
            ficheTech = {produit.ficheTech}
          />
        ))}
      </div>
      </>
  
};

export default Products;
