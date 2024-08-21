import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import styles from './slider.module.css'
import { useNavigate } from 'react-router-dom';


function Slider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        
      
      };
    let navigate = useNavigate()
    return (
       
        <Carousel {...settings} >
            <Carousel.Item  className='position-relative '>
                <img className={styles.slideimg} src={require('../../Assest/BrandingLanding(1).72a639e8e202d6efec86.webp')} alt="" />
                <div className={styles.item}>
                     <Row className='position-absolute top-0 left-0 h-100 w-100'>
                        <Col lg={4}  className='flex flex-col my-lg-auto mx-lg-5'>
                                <div style={{marginLeft:'100px'}}>
                                <h1 style={{marginBottom:'20px',fontWeight:'500',fontSize:'60px',width:'400px'}}>
                                       Transforming brands one pixel at a time
                                </h1>
                            <div className={styles.p4}>
                               
                                 <img className={styles.divimg} src={require('../../Assest/chat (1).a822bfc5c49146f8c5ac.png')} alt="" />

                                 <p>
                                 Crafting visually stunning and impactful brand transformation by refining every details.
                                 </p>
                            </div>
                                </div>
                        
                        <button className={styles.reachus} style={{marginLeft:'100px'}}  onClick={()=>navigate('/contact')}>
                         Reach Us
                  </button>
                        </Col>
                     </Row>
                     </div>

            </Carousel.Item>
            <Carousel.Item >
                <img className={styles.slideimg} src={require('../../Assest/BusinessConsultingLanding(1).5ba36ae127b4e0d5157a.webp')} alt="" />
                
                     <div className={styles.item}>
                     <Row className='position-absolute top-0 left-0 h-100 w-100'>
                        <Col lg={4} className='flex flex-col my-lg-auto mx-lg-5 text-light'>
                               <div style={{marginLeft:'100px'}}>
                               <h1 style={{marginBottom:'20px',fontWeight:'500',fontSize:'60px',width:'470px'}} >Driving growth through
                            data-driven strategies</h1>
                            <div className={styles.p4}>
                                 <img className={styles.divimg} src={require('../../Assest/chat (1).a822bfc5c49146f8c5ac.png')} alt="" />
                                 <p>Our data-driven strategies fuel business towards robust growth by hamessing the power of actionable insights.</p>
                            </div>
                        
                               </div>
                        <button className={styles.reachus} style={{marginLeft:'100px'}} onClick={()=>navigate('/contact')}>
                         Reach Us
                  </button>
                        </Col>
                     </Row>
                     </div>
                        
            
            </Carousel.Item>
            <Carousel.Item >
                <img className={styles.slideimg} src={require('../../Assest/SoftwareDevelopmentLandin.393862c6cfaa49a244ee.webp')} alt="" />
                <div className={styles.item}>
            
                    <Row className='position-absolute top-0 left-0 h-100 w-100'>
                        <Col lg={4}  className='flex flex-col my-lg-auto mx-lg-5'>
                          <div style={{marginLeft:'80px'}}>
                          <h1 style={{marginBottom:'20px',fontWeight:'500',fontSize:'60px',width:'470px'}} className='text-light'>
                    Powering growth through Technology
                    </h1>
                    <div className={styles.p4}>
                    <img className={styles.divimg} src={require('../../Assest/chat (1).a822bfc5c49146f8c5ac.png')} alt="" />
                    <p className='text-light'>
                    Leveraging innovative solutions to drive business forward, promoting efficiency, scalability, and sustained growth.
                    </p>
                    </div>
                          </div>
                    <button className={styles.reachus} style={{marginLeft:'100px'}} onClick={()=>navigate('/contact')}>
                         Reach Us
                  </button>
                        </Col>
                    </Row>
                </div>
                   
                
            </Carousel.Item>
            <Carousel.Item >
                <img className={styles.slideimg} src={require('../../Assest/digitalmarketinglanging1.df45991946a12096c1b8.jpeg')} alt="" />
                
                <div className={styles.item}>
            
            <Row className='position-absolute top-0 left-0 h-100 w-100'>
                <Col lg={4}  className='flex flex-col my-lg-auto mx-lg-5'>
                   <div style={{marginLeft:'100px'}} >
                   <h1 style={{marginBottom:'20px',fontWeight:'500',fontSize:'60px',width:'470px'}} className='text-light'>
                Ignite your
business with
our expertise
            </h1>
            <div className={styles.p4}>
            <img className={styles.divimg} src={require('../../Assest/chat (1).a822bfc5c49146f8c5ac.png')} alt="" />
            <p  className='text-light'>
            Our expertise will navigate you towards success in the ever-evolving digital landscape.
            </p>
            </div>
                   </div>
            <button className={styles.reachus} style={{marginLeft:'100px'}} onClick={()=>navigate('/contact')}>
                 Reach Us
          </button>
                </Col>
            </Row>
        </div>
           
            </Carousel.Item>
        </Carousel>



    );
}

export default Slider;