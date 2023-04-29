import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
  <div className='foot'>
     <div className='leftPart'>
        <div className='logoImg'>
            <img src="./logo2.png" alt="logo ni mila" />
        </div>
        <div className='logoDef'>Our vision is to make all people<br/>
        the best place to live for them.</div>
    </div>
    
     <div className='rightPart'>
        <div className="info">
        <div className='infoRight'>Information</div>
        <div className='Address'>145 New York, FL 5467, USA</div>
        </div>
        <div className='spans'>
        <span className='span1'>Property</span>
        <span className='span2'>Services</span>
        <span className='span3'>Product</span>
        <span className='span4'>About Us</span>
        </div>
    </div>
  
  </div>
  )
}

export default Footer
