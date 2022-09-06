import React, { useEffect, useRef ,useState } from "react";
import classes from "./Slider.module.css";
import {Animated} from "react-animated-css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
SwiperCore.use([Navigation]);




// import required modules


const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

    const [animeText,setAnimetext] = useState(false);
    const [animeText2,setAnimetext2] = useState(false);
    const [animeTextPrincipale,setAnimetextPrincipale] = useState(true);
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
                             
                           <div>
                               { animeTextPrincipale &&
                                <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDuration="3000" isVisible={true}>
                                   <div className={classes.textbg__slide}>
                                    <div>
                                      <p>NOUS NOUS FIXONS POUR LA MISSION DE  </p> <br />
                                    <button>NOS PRODUITS</button>
                                    </div>                                  
                                   <h3>FABRIQUER DES BRIQUES SOLIDE <br/> ET DURABLE POUR LA CONSTRUCTION</h3>
                                          </div>
                                </Animated>}
                                <div>
                                   </div>
                          </div>
                              
                        </div>
                        
                       
        </SwiperSlide>
        <SwiperSlide className={`${classes.slide2} ${classes.slides__content}`}>
                       <div className={classes.text} >
                            { animeText && 
                              <div>
                                     <div>
                           <Animated animationIn="bounceInRight" animationOut="fadeOut" animationInDuration="3000" isVisible={true}>
                           <div className={classes.textbg__slide2}>                                
                                   <h3>EN NOUR DISPOSE DES DERNIERES TECHNOLOGIES</h3>
                                   <div>
                                      <p> Lui Permettre D'assurer la meilleure fabrication des briques </p> 
                                    </div>
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
                               <div>
                               <div>
                     <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration="3000" isVisible={true}>
                     <div className={classes.textbg__slide2}>                                
                             <h3>TOUTES NOS BRIQUES SONT CONFORMES AU NORME INTERNATIONAUX</h3>
                             <div>
                                <p>ET CERTIFIER PAR LES DIFFIRENTS LABORATOIRES LOCAUX ET INTERNATIONAUX </p> 
                              </div>
                                    </div>
                     </Animated>
                             </div>
                     </div>
                            }
                        </div>
        </SwiperSlide>
        <div className={classes.navigations}> 
             <div className={classes.prevS} ref={prevRef}><ArrowBackIosNewIcon className="prevIcon"/></div>
             <div className={classes.nextS} ref={nextRef} onClick={startAnimationHandler}><ArrowForwardIosIcon className="nextIcon"/></div>
        </div>
        
      </Swiper>
    </>
  );
};
export default Slider;
