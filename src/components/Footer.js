import React from 'react'
import {repeatIcon, shieldIcon, mapIcon, twitterIcon, facebookIcon, instagramIcon, youtubeIcon} from '../icons/icons.js';
import '../styles/Footer.css';
const Footer = () => {
  return (
        <div>
            <div className='preFooter'>
                <div>
                    {repeatIcon}
                    <p><b>Hassle-free replacement</b> <br/>10 days easy replacement option in mi.com</p>
                </div>
                <div>
                    {shieldIcon}
                    <p><b>100% secure payments</b> <br/>We support card EMI, Wallet and COD</p>
                </div>
                <div>
                    {mapIcon}
                    <p><b>Vast service network </b><br/>1000 Mi sevice center accors 600 cities</p>
                </div>
            </div>

            <div className='preFooter2'>
                <div>
                    <p>LET'S STAY IN TOUCH</p>
                    <span>Get updates on sales apecials and more</span>
                </div>
                <div>
                    <div>
                        <input type="email" name='email' placeholder='Enter Your email' />
                        <button> > </button>
                    </div>
                    <span>Thanks! Your are our email list for special offers.</span>
                </div>
                <div>
                    <p>Follow MI</p>
                    <span>We want to hear from you</span>
                </div>
                <div>
                    {facebookIcon} {twitterIcon} {instagramIcon} {youtubeIcon}
                </div>
            </div>
        </div>
  )
}

export default Footer