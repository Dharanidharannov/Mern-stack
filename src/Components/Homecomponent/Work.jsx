import React, { useEffect, useState } from "react";


function Work(){
  
    const [click,setClick] = useState('')

    

    return(
        <div >
            <div>
            <div className='background' > </div>
                     <div 
                     style={{width:'40%',height:'505px',position:'absolute',backgroundColor:'black',opacity:'0.9', top:'3750px',left:'220px', borderRadius:'30px 0px 0px 0px',color:'white',fontWeight:'700',fontSize:'20px'}}>
                         <p style={{color:'rgb(193,44,105)',marginLeft:'50px',marginTop:'30px'}}>WE WORK FOR</p>
                         <h3 style={{marginLeft:'50px',marginTop:'30px'}}>Industries We Served</h3>
                         <div className='scrollable-content'
                         style={{marginLeft:'60px',marginTop:'30px',height:'350px',overflowY:'scroll',width:'50%',fontWeight:'400',textAlign:'center'}}>
                            <p className={`${click=='EdTech'?'bgwhite textblack ':''}`} onClick={()=>setClick('EdTech')}
                            style={{marginBottom:'50px',borderBottom:'1px solid white',paddingBottom:'20px',cursor:'pointer'}}>EdTech</p>
                            <p className={`${click=='Real Estate'?'bgwhite textblack ':''}`} onClick={()=>setClick('Real Estate')}
                            style={{marginBottom:'50px',borderBottom:'1px solid white',paddingBottom:'20px',cursor:'pointer'}}>Real Estate</p>
                            <p className={`${click=='E-Commerce'?'bgwhite textblack ':''}`} onClick={()=>setClick('E-Commerce')}
                            style={{marginBottom:'50px',borderBottom:'1px solid white',paddingBottom:'20px',cursor:'pointer'}}>E-Commerce</p>
                            <p className={`${click=='FMCGs'?'bgwhite textblack ':''}`} onClick={()=>setClick('FMCGs')}
                            style={{marginBottom:'50px',borderBottom:'1px solid white',paddingBottom:'20px',cursor:'pointer'}}>FMCGs</p>
                            <p className={`${click=='Business'?'bgwhite textblack ':''}`} onClick={()=>setClick('Business')}
                            style={{marginBottom:'50px',borderBottom:'1px solid white',paddingBottom:'20px',cursor:'pointer'}}>Business</p>
                            <p className={`${click=='Health Care'?'bgwhite textblack ':''}`} onClick={()=>setClick('Health Care')}
                            style={{marginBottom:'50px',borderBottom:'1px solid white',paddingBottom:'20px',cursor:'pointer'}}>Health Care</p>
                            <p className={`${click=='Electronics'?'bgwhite textblack ':''}`} onClick={()=>setClick('Electronics')}
                            style={{marginBottom:'50px',borderBottom:'1px solid white',paddingBottom:'20px',cursor:'pointer'}}>Electronics</p>
                            <p className={`${click=='Hospitality'?'bgwhite textblack ':''}`} onClick={()=>setClick('Hospitality')}
                            style={{marginBottom:'50px',borderBottom:'1px solid white',paddingBottom:'20px',cursor:'pointer'}}>Hospitality</p>
                            <p className={`${click=='Manufaturing'?'bgwhite textblack ':''}`} onClick={()=>setClick('Manufaturing')}
                            style={{marginBottom:'50px',borderBottom:'1px solid white',paddingBottom:'20px',cursor:'pointer'}}>Manufaturing</p>
                            <p className={`${click=='Telecom'?'bgwhite textblack ':''}`} onClick={()=>setClick('Telecom')}
                            style={{marginBottom:'50px',borderBottom:'1px solid white',paddingBottom:'20px',cursor:'pointer'}}>Telecom</p>
                            <p className={`${click=='Mining'?'bgwhite textblack ':''}`} onClick={()=>setClick('Mining')}
                            style={{marginBottom:'50px',borderBottom:'1px solid white',paddingBottom:'20px',cursor:'pointer'}}>Mining</p>
                         </div>
                           <div 
                           style={{width:'73%',height:'53vh',position:'absolute',backgroundColor:'white',opacity:'1',color:'black',top:'135px',left:'607px'}}>
                               {click=='EdTech'&&(
                                  <section style={{marginLeft:'40px',marginTop:'40px'}}>
                                  <h3 style={{borderBottom:'1px solid blue',paddingBottom:'10px'}}>EdTech</h3>
                                  <p style={{marginTop:"10px",fontWeight:'400' ,width:'300px',marginBottom:'10px'}}>
                                  Elevate your institution's capabilities through our tailored technology solutions designed to meet the evolving needs of the educational landscape.
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'300px',marginBottom:'10px',marginLeft:'15px'}}>
                                       Empower the Future of Education.
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'310px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Custom Software Development to enhance learning experiences.
                                  </p>
                         </section>
                               )}
                                {click=='Real Estate'&&(
                                     <section style={{marginLeft:'40px',marginTop:'40px'}} >
                                       <h3 style={{borderBottom:'1px solid blue',paddingBottom:'10px'}}>Real Estate</h3>
                                  <p style={{marginTop:"10px",fontWeight:'400' ,width:'350px',marginBottom:'10px'}}>
                                  Revolutionize the real estate landscape with our bespoke software solutions, offering advanced tools for property management, streamlined transactions, and data-driven decision-making.
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'350px',marginBottom:'10px',marginLeft:'15px'}}>
                                  CRM Integrations
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'350px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Innovative Proptech Solutions
                                  </p>
                                     </section>
                                )}
                                {click=='E-Commerce'&&(
                                     <section style={{marginLeft:'40px',marginTop:'40px'}} >
                                          <h3 style={{borderBottom:'1px solid blue',paddingBottom:'10px'}}>E-Commerce</h3>
                                  <p style={{marginTop:"10px",fontWeight:'400' ,width:'350px',marginBottom:'10px'}}>
                                  Delivering robust platforms that optimize user experience, enhance security, and drive online sales.
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'350px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Scalable e-commerce platforms.
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'350px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Fuel the growth of your online retail business
                                  </p>
                                     </section>
                                )}
                                 {click=='FMCGs'&&(
                                     <section style={{marginLeft:'40px',marginTop:'40px'}} >
                                       <h3 style={{borderBottom:'1px solid blue',paddingBottom:'10px'}}>FMCGs</h3>
                                  <p style={{marginTop:"10px",fontWeight:'400' ,width:'350px',marginBottom:'10px'}}>
                                  Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'350px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Boost efficiency and agility
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'400px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.
                                  </p>
                                     </section>
                                )}
                                {click=='Business'&&(
                                     <section style={{marginLeft:'40px',marginTop:'40px'}} >
                                       <h3 style={{borderBottom:'1px solid blue',paddingBottom:'10px'}}>Business</h3>
                                  <p style={{marginTop:"10px",fontWeight:'400' ,width:'350px',marginBottom:'10px'}}>
                                  Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'350px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Boost efficiency and agility
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'400px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.
                                  </p>
                                     </section>
                                )}
                                {click=='Health Care'&&(
                                     <section style={{marginLeft:'40px',marginTop:'40px'}} >
                                       <h3 style={{borderBottom:'1px solid blue',paddingBottom:'10px'}}>Health Care</h3>
                                  <p style={{marginTop:"10px",fontWeight:'400' ,width:'350px',marginBottom:'10px'}}>
                                  Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'350px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Boost efficiency and agility
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'400px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.
                                  </p>
                                     </section>
                                )}
                                {click=='Electronics'&&(
                                     <section style={{marginLeft:'40px',marginTop:'40px'}} >
                                       <h3 style={{borderBottom:'1px solid blue',paddingBottom:'10px'}}>Electronics</h3>
                                  <p style={{marginTop:"10px",fontWeight:'400' ,width:'350px',marginBottom:'10px'}}>
                                  Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'350px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Boost efficiency and agility
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'400px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.
                                  </p>
                                     </section>
                                )}
                                {click=='Hospitality'&&(
                                     <section style={{marginLeft:'40px',marginTop:'40px'}} >
                                       <h3 style={{borderBottom:'1px solid blue',paddingBottom:'10px'}}>Hospitality</h3>
                                  <p style={{marginTop:"10px",fontWeight:'400' ,width:'350px',marginBottom:'10px'}}>
                                  Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'350px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Boost efficiency and agility
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'400px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.
                                  </p>
                                     </section>
                                )}
                                 {click=='Manufaturing'&&(
                                     <section style={{marginLeft:'40px',marginTop:'40px'}} >
                                       <h3 style={{borderBottom:'1px solid blue',paddingBottom:'10px'}}>Manufaturing</h3>
                                  <p style={{marginTop:"10px",fontWeight:'400' ,width:'350px',marginBottom:'10px'}}>
                                  Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'350px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Boost efficiency and agility
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'400px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.
                                  </p>
                                     </section>
                                )}
                                {click=='Telecom'&&(
                                     <section style={{marginLeft:'40px',marginTop:'40px'}} >
                                       <h3 style={{borderBottom:'1px solid blue',paddingBottom:'10px'}}>Telecom</h3>
                                  <p style={{marginTop:"10px",fontWeight:'400' ,width:'350px',marginBottom:'10px'}}>
                                  Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'350px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Boost efficiency and agility
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'400px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.
                                  </p>
                                     </section>
                                )}
                                {click=='Mining'&&(
                                     <section style={{marginLeft:'40px',marginTop:'40px'}} >
                                       <h3 style={{borderBottom:'1px solid blue',paddingBottom:'10px'}}>Mining</h3>
                                  <p style={{marginTop:"10px",fontWeight:'400' ,width:'350px',marginBottom:'10px'}}>
                                  Leverage cutting-edge technology to accelerate decision-making and propel your FMCG business into a realm of heightened productivity and competitiveness.
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'350px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Boost efficiency and agility
                                  </p>
                                  <p style={{fontWeight:'400' ,width:'400px',marginBottom:'10px',marginLeft:'15px'}}>
                                  Tailored software solutions, optimizing supply chain management, inventory tracking, and sales analytics.
                                  </p>
                                     </section>
                                )}
                           </div>
                            
                         </div>

                       
                     </div>
               </div>
         
        
    
    )
}


export default Work;