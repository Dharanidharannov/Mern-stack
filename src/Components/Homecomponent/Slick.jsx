import React from "react";
import styles from "./slick.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Slick(){
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
      
      };

      return(
        <div className="slider-container mt-5  ">
      <Slider {...settings} >
           
          <section className={` slick1`} >
          <div className={`body1`}>
               <h3 style={{fontWeight:'bolder',marginBottom:'15px'}}>
                Software Consulting
               </h3>
               <p className={styles.p1}>Explore Service</p>
               <p>We offer expert guidance to optimise your software solutions, streamline processes, and enhance overall efficiency.</p>
           </div>
          </section>
          <section className={` slick2 `}>
          <div className={`body2 `}>
               <h3 style={{fontWeight:'bolder',marginBottom:'15px'}}>
                Branding
               </h3>
               <p className={styles.p2}>Explore Service</p>
               <p>Let us guide you in creating a lasting impression that speaks volumes about your values and vision.</p>
           </div>
          </section>
           <section className={` slick3`}>
           <div className={` body3 `}>
              <h3 style={{fontWeight:'bolder',marginBottom:'15px'}}>
                Digital Marketing
              </h3>
              <p className={styles.p3}>Explore Service</p>
              <p>We offer expert guidance to optimise your software solutions, streamline processes, and enhance overall efficiency. </p>
           </div>
           </section>
           <section className={`slick4 `}>
           <div className={`body4 `}>
              <h3 style={{fontWeight:'bolder',marginBottom:'15px'}}>Business Consulting</h3>
              <p className={styles.p4}>Explore Service</p>
              <p>We collaborate with you to identify opportunities, overcome challanges, and implement effective strategies. </p>
           </div>
           </section>
           
        </Slider>
    </div>
  );
}

export default Slick;
      
      
