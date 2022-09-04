import React from 'react'
import classes from './Nav.module.css';
import IMG1 from '../../assets/logo.png'

const Nav = () => {
  return (
    <div className={classes.nav__container}>
                <div className={classes.logo}>
                                <img src={IMG1} alt='Ennour-Briquetrie' /> <div><h1>ENNOUR BRIQUETERIE</h1></div>
                </div>
                <div className={classes.ul}>
                            <ul>
                                <a href='#' className='classes.a' ><li>Contact</li></a>
                                <a href='#' className='classes.a' ><li>Our Products</li></a>
                                <a href='#' className='classes.a' ><li>About </li></a>
                                <a href='#'className='classes.a' ><li>Location</li></a>
                                <a href='#' className='classes.a' ><li>Commande</li></a>
                            </ul>
                </div>
    </div>
  )
}

export default Nav