import React from "react";
import styles from "./roadmap.module.css"
import { useNavigate } from "react-router-dom";

function Aboutmodule(){
    let navigate = useNavigate()
    return(
        <div className='d-flex justify-content-between mt-4 mb-6'>
            <img  className={`${styles.roadmap} `} src={require('../../Assest/RoadMapToBusiness.webp')} alt="" />
            <div className='m-5'>
                <div >
                    <p style={{fontWeight:'bold'}} className='text-primary'>About us</p>
                    <h1 style={{fontWeight:'bold'}}>Your roadmap to business success.</h1>
                       <div style={{padding:'5px'}}>
                             <p style={{padding:'4px'}}>Software Consulting</p>
                             <p style={{padding:'4px'}}>Digital Marketing</p>
                             <p style={{padding:'4px'}}>Branding</p>
                             <p style={{padding:'4px'}}>Business Consulting</p>
                       </div>
                       <p>We specialise in guiding businesses towards achieving their goals, whether it be through developing cutting-edge software solutions, implementing effective digital marketing strategies, creating compelling branding experiences, or providing expert advice and consulting services.</p>
                        
                    
                </div>
                <div style={{marginTop:'10px'}}>
                <button className={styles.more} onClick={()=>navigate('/about')}>
                         More About us
                  </button>
                </div>
            </div>
        </div>
    )
}

export default Aboutmodule;