import React from "react";
import classes from "./Galerie.module.css";
import IMG1 from "../../assets/four.jpg";
import IMG2 from "../../assets/robots1.jpg";
import IMG3 from "../../assets/cercleuse.jpg";
import IMG4 from "../../assets/pic3.jpg";
import IMG5 from "../../assets/pic4.jpg";
import IMG6 from "../../assets/slide2.jpg";
import HeaderDivs from "../HeaderDiv/HeaderDivs";

const Galerie = () => {
  return (
    <>
      <HeaderDivs title="ENNOUR GALERIE" />
      <div className={classes.flex_div__container}>
        <div className={classes.galerie}>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            
            <img src={IMG1} />
          </div>
          <div
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            
            <img src={IMG2} />
          </div>
          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            
            <img src={IMG3} />
          </div>
        </div>
        <div className={classes.galerie2}>
          <div>
            
            <img src={IMG4} />
          </div>
          <div>
            <img src={IMG5} />
          </div>

          <div  data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            
            <img src={IMG6} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Galerie;
