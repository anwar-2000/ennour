import React from 'react'
import HeaderDivs from '../HeaderDiv/HeaderDivs'
import classes from'./Contact.module.css'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io5'
import {BsTwitter} from 'react-icons/bs'

const Contact = () => {
  return <>
    <HeaderDivs title='Contact Ennour' />
    <div className={classes.container}>
            <div className={classes.Left}>
                    <div className={classes.card}>
                                    <div className={classes.icons}>
                                                <BsMessenger />
                                    </div>
                                    <div className={classes.text}>
                                                <a href=''>Send a message</a>
                                    </div>
                    </div>
                    <div className={classes.card}>
                                    <div className={classes.icons}>
                                                <IoLogoWhatsapp />
                                    </div>
                                    <div className={classes.text}>
                                                <a href=''>Send a message</a>
                                    </div>
                    </div>
                    <div className={classes.card}>
                                    <div className={classes.icons}>
                                                <BsTwitter />
                                    </div>
                                    <div className={classes.text}>
                                                <a href=''>Send a message</a>
                                    </div>
                    </div>     
            </div>
            <div className={classes.Right}>
                        <div className={classes.inputs}>
                                <h1>SEND EMAIL :</h1>
                                <textarea cols={100} rows={20} placeholder='Your Message Here'  /> <br />
                                <button type='submit'>Send Email</button>
                        </div>
            </div>
    </div>
    </>
  
}

export default Contact