import React from 'react'
import classes from './Nav.module.css';
import IMG1 from '../../assets/32trous.png'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PlaceIcon from '@mui/icons-material/Place';

const Nav = () => {
      
  return (
    <div className={classes.nav__container}>
                <div className={classes.logo}>
                                <img src={IMG1} alt='Ennour-Briquetrie' /> <div> <h1> <span className={classes.h1Nav}>EN NOUR</span> <br/> BRIQUETERIE</h1></div>
                </div>

          <div className={classes.flexNav}>
                <div className={classes.Localisation__contact}>
                    <div className={classes.place1}>
                      <div><span className={classes.aSelcted}>Commande</span></div>
                    <div><PlaceIcon className={classes.icon2}/></div>
                      <div>
                              <small>Sidi Bounoir - Remchi</small>
                            
                        </div>
                       
                    </div>
                        
                    <div className={classes.contact1}>
                      <div><PhoneInTalkIcon className={classes.icon1}/></div>
                      <div>
                               <a href='tel:+213665185887'>0665185887</a> <br />
                               <a href="mailto:ennour@gmail.com">ennour.briqueterie@gmail.com</a>
                        </div>
                    </div>

                </div>
                <hr />
                <div className={classes.ul}>
                            <ul>                                
                                <a href='#' className={classes.a} ><li>Nos Produits</li></a>
                                <a href='#' className={classes.a} ><li>Qui Somme Nous ? </li></a>
                                <a href='#' className={classes.a} ><li>Localisation</li></a>
                                <a href='#' className={classes.a} ><li>Contact</li></a>
                            </ul>
                </div>
           </div>
    </div>
  )
}

export default Nav