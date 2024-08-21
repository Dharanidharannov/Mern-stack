import React from "react";
import { Row,Col } from "react-bootstrap";


function Mission(){
    return(
        <div style={{marginTop:'60px' , width:'100%',height:'45vh'}}>
            <Row className="container mx-auto col-lg-11 ">
                <Col lg={7} style={{marginLeft:'0px'}} >
                   <p style={{marginBottom:'20px',color:'blue'}}>ABOUT US</p>
                   <h1 style={{marginBottom:'20px'}}>Your roadmap to Business Success</h1>
                   <p style={{marginBottom:'20px'}}>With 2 decades of experience</p>
                   <p style={{color:'rgb(134,147,164)',width:'400px'}}>
                   We specialise in guiding businesses towards achieving their goals, whether it be through developing cutting-edge software solutions, implementing effective digital marketing strategies, creating compelling branding experiences, or providing expert advice and consulting services.
                   </p>
                </Col>
                <Col lg={5} style={{marginLeft:'0px'}}>
                      <h1>
                               Our Mission
                      </h1>
                      <p style={{width:'400px',marginTop:'20px',color:'rgb(134,147,164)'}}>
                      Our Mission is to harness the power of technology and creativity to elevate your brand, optimize operations, and propel your business into a thriving future.
                      </p>
                      <h1 style={{marginTop:'20px'}}>
                            Our Vision
                      </h1>
                      <p style={{width:'400px',marginTop:'20px',color:'rgb(134,147,164)'}}>
                      Our Vision is to create a future where businesses thrive in the digital landscape, achieving unparalleled growth and innovation.
                      </p>
                       
                </Col>
            </Row>
        </div>
    )
}

export default Mission;