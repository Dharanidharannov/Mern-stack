import React from 'react'
import { useState,useEffect } from 'react';

function Footer(){
   

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

  
    
    return(
        <div style={{width:'100%',height:'56px',backgroundColor:'rgb(19,19,60)',marginTop:'40px'}}>

            <div style={{display:'flex',flex:'column',justifyContent:'space-evenly',marginLeft:'-250px',color:'rgb(137,137,158)'}}>
                <p style={{marginTop:'10px'}}>Terms&conditions</p>
                <p style={{marginTop:'10px',marginLeft:'-150px'}}>Privacy policy</p>
                <p style={{marginTop:'10px',marginLeft:'-150px'}}>Merida Tech Minds (OPC) Pvt.Ltd © 2024</p>
            </div>

            <div className="back-to-top" style={{marginLeft:'1300px',marginTop:'-15px'}} >
      
        <button onClick={scrollToTop} className="back-to-top-button" style={{color:'white'}}>
          ↑ Back to Top
        </button>
  
    </div>

        </div>
    )
}

export default Footer;