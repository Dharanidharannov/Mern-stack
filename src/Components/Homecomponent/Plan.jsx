import React from "react";
import { Row,Col } from "react-bootstrap";


function Plan(){
    return(
        <div  style={{width:'100%',height:'95vh',backgroundColor:'rgb(241,245,249)',marginTop:'70px',position:'relative'}}>

            <p style={{color:'blue',fontWeight:'600',textAlign:'center',paddingTop:'30px'}}>HOW WE WORKS </p>
            <h2 style={{fontWeight:'500',fontSize:'30px',paddingTop:'30px',textAlign:'center'}}>We Plan for your Growth</h2>

            <Row>
                <Col style={{marginLeft:'200px',marginTop:'50px'}}>
                        <div style={{border:'1px solid black ',borderRadius:'60px 60px 60px 0px',padding:'95px',width:'35px',rotate:'300deg'}}>
                         </div>
                         <img style={{position:'absolute',top:'170px'}} src={require('../../Assest/working-1.jpg')} alt="" />
                         <p style={{marginTop:'40px',fontSize:'30px'}}>Connecting with you</p>
                         <p></p>
                </Col>
                <Col>
rjekngkngrken
                </Col>
                <Col>
                        
                </Col>
            </Row>

        </div>
    )
}

export default Plan;