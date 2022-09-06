import React from 'react'
import HeaderDivs from '../HeaderDiv/HeaderDivs'
import classes from './Localisation.module.css'
import PlaceIcon from '@mui/icons-material/Place';

const Localisation = () => {
  return (
    <div>
        <HeaderDivs title='En Nour Localisation' />
        <div className={classes.container__location}>

       
                <div className={classes.text}>
                            <div className={classes.headerText}>
                                        <h3> NOTRE LOCALISATION & HEURES D'OUVERTURE </h3>
                            </div>
                            <div className={classes.paragraph}>
                                 <p>  <PlaceIcon/> BP 536 SIDI BOUNOUAR، Remchi 13005</p>
                                 <p>         <strong> mardi</strong>
                                              08:00–16:00 <br />

                                                  <strong>mercredi</strong>
                                                          08:00–16:00 <br />

                                                          <strong> jeudi</strong>
                                                          08:00–16:00 <br />

                                                          <strong>  vendredi</strong>
                                                                    Fermé <br />

                                                                    <strong>  samedi</strong>
                                                                    Fermé <br />

                                                                    <strong>  dimanche</strong>
                                                                      08:00–16:00 <br />

                                                                      <strong>  lundi</strong>
                                                                                      08:00–16:00</p>
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