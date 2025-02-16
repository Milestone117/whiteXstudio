import React from 'react'

import './Footer.css'



const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (

    <div className='footer'>

        <p>&copy; {currentYear} whiteXstudio. All rights reserved. | Designed and Developed by Techsity Web Team</p>

        <ul>

            <li>Terms of Services</li>

            <li>Privacy Policy</li>

        </ul>

    </div>

  )

}



export default Footer