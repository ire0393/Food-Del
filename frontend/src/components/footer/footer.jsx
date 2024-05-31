import React from 'react'
import { assets } from '../../assets/assets'
import './footer.css'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
               <img src={assets.orile} alt="" />
               <p>We have the best dishes in town home and abroad</p>
               <div className="footer-social-icons">
                 <img src={assets.facebook_icon} alt="" />
                 <img src={assets.twitter_icon} alt="" />
                 <img src={assets.linkedin_icon} alt="" />
             </div>
            </div>
            <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
               <li>Home</li> 
               <li>About us</li> 
               <li>Delivery</li> 
               <li>Privacy Policy</li> 
            </ul>
            </div>
             <div className="footer-content-right">
                 <h2>GET IN TOUCH</h2>
                 <ul>
                 <li>+234-70-355-2971</li> 
                 <li>contact@safayatech.com</li> 
                 </ul>
             </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 Safayatech.com * All rights Reserved.</p>
    </div>
  )
}

export default Footer
