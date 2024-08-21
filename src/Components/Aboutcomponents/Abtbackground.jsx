import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Abtbackground(){
    let navigate = useNavigate()
    return(
        <div className="backcompany">
            <h3 style={{position:'absolute',color:'white',top:'350px',left:'580px',fontSize:'50px',fontWeight:'550'}}>About Company</h3>
            <span 
             
            style={{position:'absolute',color:'white',cursor:'pointer',top:'500px',left:'30px',fontWeight:'500'}} onClick={()=>navigate('/')}>Home  </span>
            <span style={{position:'absolute',color:'white',top:'500px',left:'90px',fontWeight:'500'}} >About Company</span>
        </div>
    )
}
export default Abtbackground;