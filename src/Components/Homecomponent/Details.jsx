import React from 'react'
import { Row,Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Details(){
  let navigate = useNavigate()
    return(
        <div style={{marginTop:'60px'}}>
             <Row style={{marginLeft:'90px'}}>
                <Col lg={3}>
                         <h1 style={{borderBottom:'1px solid blue',fontWeight:'600',paddingBottom:'25px',marginBottom:'10px'}}>Office Location</h1>
                         <p style={{fontWeight:'500',marginBottom:'10px'}}>Head Office</p>
                         <p style={{marginBottom:'10px'}}>Merida Tech Minds (OPC) Pvt.Ltd</p>
                         <p style={{marginBottom:'10px'}}>20-2 ,Keshava Krupa Building 2nd Floor, 30th cross, 10th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011</p>
                        <a style={{display:'flex',flex:'column',alignItems:'center'}} target='_blank' href="https://www.google.com/maps/place/Tech+minds/@12.9287552,77.5827903,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15adfc868c21:0xfa8b6c9cbfe474ad!8m2!3d12.92875!4d77.5853652!16s%2Fg%2F11qbh0hp7f?entry=ttu">
                          <img style={{width:'40px'}} src={require('../../Assest/location.png')} alt="" /> 
                          <p>Google maps</p>
                          </a>
                </Col>
                <Col lg={3}>
                <h1 style={{borderBottom:'1px solid blue',fontWeight:'600',paddingBottom:'25px',marginBottom:'10px'}}>Company</h1>
                <div>
                    <p onClick={()=>navigate('/')} style={{marginBottom:'10px',cursor:'pointer'}}>Home</p>
                    <p style={{marginBottom:'10px'}}>About us</p>
                    <p style={{marginBottom:'10px'}} >Blogs</p>
                    <p style={{marginBottom:'10px'}}>Services</p>
                    <p style={{marginBottom:'10px'}}>Our team</p>
                    <p style={{marginBottom:'10px'}}>Contact</p>
                    <p style={{marginBottom:'10px'}}>Careers</p>
                </div>
                </Col>
                <Col lg={3}>
                     <h1 style={{borderBottom:'1px solid blue',fontWeight:'600',paddingBottom:'25px',marginBottom:'10px'}}>
                               Industries
                     </h1>
                     <div>
                     <p style={{marginBottom:'10px'}}>EdTech</p>
                    <p style={{marginBottom:'10px'}}>Real Estate </p>
                    <p style={{marginBottom:'10px'}} >E-Commerce</p>
                    <p style={{marginBottom:'10px'}}>FMCGs</p>
                    <p style={{marginBottom:'10px'}}>Health Care</p>
                    <p style={{marginBottom:'10px'}}>Electronics</p>
                    <p style={{marginBottom:'10px'}}>Business</p>
                     </div>
                </Col>
                <Col lg={3}>
                      <h1 style={{borderBottom:'1px solid blue',fontWeight:'600',paddingBottom:'25px',marginBottom:'10px'}}>
                      Affiliate Businesses
                      </h1>
                      <div>
                      <p style={{marginBottom:'10px'}}>EduTech</p>
                    <p style={{marginBottom:'10px'}}>HR Consulting </p>
                    <p style={{marginBottom:'10px'}} >Trading</p>
                    <p style={{marginBottom:'10px'}}>Learning Management System</p>
                      </div>
                </Col>
             </Row>
        </div>
    )
}
export default Details;