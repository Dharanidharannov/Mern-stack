import React from "react";
import styles from "./whatsapp.module.css"


function Whatsapp(){
    return(
        <div>
            <img className={styles.wpimg} src={require('../../Assest/whatsapp.png')} alt="" />
        </div>
    )
}

export default Whatsapp;