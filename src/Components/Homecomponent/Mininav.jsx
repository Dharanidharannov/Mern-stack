import React from "react";
import styles from './mininav.module.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Mininav({name,name1}){
    return(
        <div className={styles.mininav}>
          <div className={styles.c1} >
            <p className=" ">Skill Learning Academy</p>
            <p>HR Consultancy</p>
         <p>Foturne Trading {name1 && name} Academy</p>
          </div>
          <div className={styles.c2}>
               <FaInstagram className={styles.insta} />
               <FaFacebook className={styles.insta}/>
               <FaXTwitter className={styles.insta} />
               <FaLinkedin className={styles.insta}/>
          </div>
        </div>
    )
}
export default Mininav;