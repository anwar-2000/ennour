import React from 'react'
import HeaderDivs from '../HeaderDiv/HeaderDivs'
import classes from './Localisation.module.css'

const Localisation = () => {
  return (
    <div>
        <HeaderDivs title='ENNOUR LOCATION' />
        <div className={classes.container__location}>

       
                <div className={classes.text}>
                            <div className={classes.headerText}>
                                        <h3> OUR LOCATION </h3>
                            </div>
                            <div className={classes.paragraph}>
                                    <p>lorem lorem lorem loerm lorem loremloerm loerm lorem lorem lorem lorem lorem lorem loerm lorem loremloerm loerm lorem lorem loremlorem lorem lorem loerm lorem loremloerm loerm lorem lorem lorem </p>
                            </div>
                </div>
                <div className={classes.carte}>
                    
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.4530820491595!2d-1.460391282556152!3d35.07041049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd78dd8f45fee7ef%3A0xa0477d955c0bb49b!2sBRIQUETERIE%20EN%20NOUR!5e0!3m2!1sfr!2sdz!4v1661547378429!5m2!1sfr!2sdz" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
         </div>
        
        </div>
  )
}

export default Localisation