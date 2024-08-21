import React from "react";
import styles from "./home.module.css"
import Mininav from "./Mininav";
import Nav from "./Nav";
import Slider from "./Slider";
import Aboutmodule from "./Aboutmodule";
import Services from "./Services";
import Slick from "./Slick";
import Whatsapp from "./Whatsapp";
import Thinking from "./Thinking";
import Choose from "./Choose";
import Work from "./Work";
import Details from "./Details";
import Footer from "./Footer";
import Plan from "./Plan";

function Homesection1({ data, fun,fun2, str, num, dataobj }) {

    

    return (
      
         <div>
              <Slider/>
              <Aboutmodule/>
              <Services/>
              <Slick/>
              <Thinking/>
              <Choose/>
              <Work/>
              <Plan/>
               <Details/>
               <Footer/> 
              <Whatsapp/>
             
        </div>
      
           
            
    )
}
export default Homesection1;
// Homesection1.defaultProps = {
//     dataobj: {
//         name:null
//     },
//     fun:'sbse',
//     fun2:()=>{
//         console.log("hellow");
//     }
// }