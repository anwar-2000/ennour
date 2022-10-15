import React from 'react'
import classes from './HeaderDivs.module.css'
import {BsFillCircleFill} from 'react-icons/bs'


const HeaderDivs = (props) => {
  return (
    <div className={classes.container}>
             <center> <div className={classes.header}>
                       <div className={classes.h3__title}><h3>{props.title}</h3></div> 
                       <div className={classes.circles}>
                       <BsFillCircleFill className={`${classes.icons} ${classes.icon1}`} />           
                       <BsFillCircleFill className={`${classes.icons} ${classes.icon2}`} /> 
                       <BsFillCircleFill className={`${classes.icons} ${classes.icon3}`}/> 
                       </div>
               </div> </center> 

    </div>
  )
}

export default HeaderDivs