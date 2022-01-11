import React from 'react'
import '../styles/Footer.css'
import { Instagram, Facebook , LinkedIn , Twitter } from '@mui/icons-material'

function Footer() {
    return (
        <div className='footer'>
           <div className='socialMedia'>
               <Instagram/>
               <Facebook />
               <LinkedIn />
               <Twitter />
           </div>
           <p> &#169; 2022 - Alessio G.</p>
        </div>
    )
}

export default Footer
