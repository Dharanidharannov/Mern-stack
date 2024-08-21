import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./thinking.module.css"


function Thinking ( ){
    const settings = {
     
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };

    return(
           <div>
            <div className={styles.childdiv} >  
              <Slider {...settings} className={styles.slider}>
               
                <div><img src={require('../../Assest/clients-1.png')} alt="" /></div>
                <div><img src={require('../../Assest/clients-2.png')} alt="" /></div>
                <div><img src={require('../../Assest/clients-3.png')} alt="" /></div>
                <div><img src={require('../../Assest/clients-4.png')} alt="" /></div>
                <div><img src={require('../../Assest/clients-5.png')} alt="" /></div>
                <div><img src={require('../../Assest/clients-6.png')} alt="" /></div>
                <div><img src={require('../../Assest/clients-7.png')} alt="" /></div>
                <div><img src={require('../../Assest/clients-8.png')} alt="" /></div>
                <div><img src={require('../../Assest/clients-1.png')} alt="" /></div>
                <div><img src={require('../../Assest/clients-10.png')} alt="" /></div>
               
                
                
              </Slider> 
                 <p className={styles.p1}>2.6k Companies&Individuals Trusted Us </p>
                </div>

                <div className={styles.child2}>
                  <div className={styles.childa}>
                       <p style={{color:'pink',padding:'20px'}}> Turning Challenges into Triumphs</p>
                       <h2 style={{color:'white',padding:'20px'}}>Thinking Beyond Ordinary Strategies</h2>
                       <p style={{color:'white',padding:'20px'}}>Propels organizations towards unprecedented success through innovative and unconventional strategies.</p>
                       <button className={styles.btnknow}>
                          Know More
                       </button>
                  </div>
                  <div >
                    <div>
                    <img className={styles.growth} src={require('../../Assest/growth-1.png')}  alt="" />
                    </div>
                    <div className={styles.subchild}>
                      <p style={{color:'white'}}>Projects Delivered</p>
                      <span style={{color:'white', margin:'9px'}}>2000+</span>
                      <span style={{color:'green'}}>+22%</span>    
                    </div>       
                  </div>

                  <div style={{backgroundColor:'white', width:'360px'}}>
                      <div >
                          <h3>Mission</h3>
                          <p>Our Mission is to harness the power of technology and creativity to elevate your brand, optimize operations, and propel your business into a thriving future.</p>
                      </div>
                      <div>
                          <h3>Vision</h3>
                          <p>Our Vision is to create a future where businesses thrive in the digital landscape, achieving unparalleled growth and innovation.</p>
                      </div>

                  </div>
                </div>
          </div>
    )
}
export default Thinking;