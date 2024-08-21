import React, { useContext, useEffect, useState } from "react";
import styles from './Nav.module.css'
import Slider from './Slider'
import { useLocation, useNavigate } from "react-router-dom";
import { AppStorage } from "../../context/AppStore";

function Nav() {
 let {active} = useContext(AppStorage)

 let navigate = useNavigate()



  return (
    <div className={styles.parentdiv}>
      <div className={styles.maindiv}>

        <div >
          <img className={styles.imgmer} src="https://meridatechminds.com/static/media/png-01.b828553ab6c128308899.png" alt="" />
        </div>

        <div className={styles.para}>
          <p className={`${active == 'home' ? 'bg-danger' : ''}  ${styles.p}`} style={{ cursor: 'pointer' }} onClick={() =>navigate('/')}  >Home</p>
          <p className={`${active == 'about' ? 'bg-danger' : ''}  ${styles.p}`} style={{ cursor: 'pointer' }} 
            onClick={() => 
              navigate('/about')
             
            }
          >About</p>
          <p className={`${active == 'service' ? 'bg-danger' : ''}  ${styles.p}`} style={{ cursor: 'pointer' }} onClick={() => 
            navigate('/services') 
           }
             >Services</p>
          <p className={`${active == 'portfolio' ? 'bg-danger' : ''}  ${styles.p}`} style={{ cursor: 'pointer' }} onClick={() =>  navigate('/portfolio')}>Portfolio</p>
          <p className={`${active == 'testimonial' ? 'bg-danger' : ''}  ${styles.p}`} style={{ cursor: 'pointer' }} onClick={() =>  navigate('/testmonial')}>Testmonial</p>
          <p className={`${active == 'blog' ? 'bg-danger' : ''}  ${styles.p}`} style={{ cursor: 'pointer' }} onClick={() =>navigate('/blog')}>Blog</p>
        </div>

        <div className='d-flex mt-1 mx-lg-5'>
          <button className={styles.contactbutton} onClick={() => navigate('/contact')}>
            Contact
          </button>
          <img className={styles.navimg} src={require('../../Assest/projicon 1.png')} alt="" />
        </div>

      </div>
    </div>
  )
}
export default Nav;
