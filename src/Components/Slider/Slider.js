import React, { useEffect, useRef ,useState } from "react";
import IMG1 from'../../assets/produits.jpg';
import Nav from '../Nav/Nav'
import classes from "./Slider.module.css";
import {Animated} from "react-animated-css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation]);




// import required modules


const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

    const [animeText,setAnimetext] = useState(false);
    const [animeText2,setAnimetext2] = useState(false);
    const [clickedNext,setclicked] = useState(false);
    useEffect(()=>{
          setTimeout(()=>{
               if(clickedNext){
                setAnimetext(true);
                setAnimetext2(true);
               }

          },500);
          return ()=>{
            console.log("cleanUPPP");
            setAnimetext(false);
            setAnimetext2(false);
            setclicked(false);
          }
    },[clickedNext]);
    const startAnimationHandler = () => {
            setclicked(true);
    };

  return (
    <>
    <Nav />
      <Swiper
        allowTouchMove={false}
        spaceBetween={30}
        centeredSlides={true}      
        loop={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide className={`${classes.slide1} ${classes.slides__content}`}>
                        <div className={`${classes.text} ${classes.header__content}`}  >
                              <h1  data-aos="zoom-in" data-aos-duration="3000">ENNOUR  BRIQUETERIE</h1>
                           <div>
                                <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDuration="1000" isVisible={true}>
                                   <div>
                                   <h3>BEST QUALITY OFFERED MADE IN MODERN WAY MADE BY NEWEST TECHS   </h3>
                                          </div>
                                </Animated>
                                <div>
                           <Animated animationIn="bounceInRight" animationOut="fadeOut" animationInDuration="2500" isVisible={true}>
                             <div className={classes.image_slide1}>
                                <img src={IMG1} />
                             </div>
                           </Animated>
                                   </div>
                          </div>
                              
                        </div>
                        
                       
        </SwiperSlide>
        <SwiperSlide className={`${classes.slide2} ${classes.slides__content}`}>
                       <div className={classes.text} >
                            { animeText && 
                              <div>
                             <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                             <div>
                                <h1 className={classes.headertext}>ENNOUR BRIQUETERIE</h1>
                             </div>
                           </Animated>
                                     <div>
                           <Animated animationIn="bounceInRight" animationOut="fadeOut" animationInDuration="1000" isVisible={true}>
                             <div className={classes.image_slide2}>
                                <img src={IMG1} />
                             </div>
                           </Animated>
                           <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDuration="3000" isVisible={true}>
                             <div className={classes.desc_slide2}>
                                  <h2>Créateur de briques depuis 1929 </h2>
                             </div>
                           </Animated>
                                   </div>
                           </div>
                            }
                        </div>
        </SwiperSlide>
        <SwiperSlide className={`${classes.slide3} ${classes.slides__content}`}>
                        <div className={classes.text} >
                            { animeText2 && 
                              <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                              <div>
                                 <h1 className={classes.headertext}>ENNOUR BRIQUETERIE</h1>
                              </div>
                            </Animated>
                            }
                        </div>
        </SwiperSlide>
        <div className={classes.navigations}> 
             <div ref={prevRef}>Prev</div>
             <div ref={nextRef} onClick={startAnimationHandler}>Next</div>
        </div>
        
      </Swiper>
    </>
  );
};
export default Slider;
