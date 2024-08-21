import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import styles from "./choose.module.css"
import '../../index.css'
function Choose() {
  const [flippedStates, setFlippedStates] = useState([false, false, false,false,false,false])
 


  const handleFlip = (index, value) => {
    setFlippedStates((States) => 
      States.map((flip, i) => (i === index ? value : flip))
    );
  }

 



  return (
    <div className='position-relative  ' style={{height:'800px'}}>
      <div className='mt-5'>
        <p style={{ color: 'blue', textAlign: 'center',marginBottom:'10px' }}>WHY CHOOSE US</p>
        <h1 style={{ textAlign: 'center',fontWeight:'bolder' }}>Reason To Choose Merida</h1>
      </div>
      <div>

        <img src={require('../../Assest/download.webp')} className={styles.chooseimg} alt="" />
      </div>


    <section style={{ top: '30px', left: '125px' }}
        className={`${flippedStates[0]? 'bg-black text-white' : 'bggrey '}
          col-lg-3 marign threesiderounded p-2 position-absolute transi h-450 `} onMouseEnter={() => handleFlip(0,true)}
        onMouseLeave={() => handleFlip(0,false)} >

        <ReactCardFlip isFlipped={flippedStates[0]} flipDirection="vertical">
          <div key="front" style={{margin:'8px'}}>
            <h3 style={{marginBottom:'12px'}}>Extensive Knowledge</h3>
            <p style={{ width: '200px' }}>Benefit from our wealth of expertise.</p>
          </div>
          <div key="back" style={{margin:'5px'}}>
            <p style={{ width: '200px' }}>Benefit from our wealth of expertise, ensuring informed decisions and solutions tailored to your unique requirements.</p>
          </div>
        </ReactCardFlip>
        <div className={`${flippedStates[0]?'bgpink':'bgblue'}`}
      style={{width:'15px',height:'25px',position:'absolute',top:'-23px',right:'40px',borderRadius:'60px 30px 0px 0px'}}
      onMouseEnter={()=>handleFlip(0)}>

      </div>
      <div className={`${flippedStates[0]?'bgpink':'bgblue1'}`}
      style={{width:'80px',height:'95px',position:'absolute',top:'-23PX',right:'-36px',borderRadius:'0px 25px 0px 25px'}}
      onMouseLeave={()=>handleFlip(0)}>
        <img style={{width:'50px',marginLeft:'15px',marginTop:'10px'}} src={require('../../Assest/clock.png')} alt="" />
        </div>
    </section>
    <section style={{ top: '250px', left: '60px' }}
        className={`${flippedStates[1] ? 'bg-black text-white' : 'bggrey '}
          col-lg-3 marign threesiderounded p-2 position-absolute transi h-450 `} onMouseEnter={() => handleFlip(1,true)}
        onMouseLeave={() => handleFlip(1,false)} >
      
      <ReactCardFlip isFlipped={flippedStates[1]} flipDirection="vertical">
        <div key="front">
          <h3>
               Team Apporach
          </h3>
          <p style={{width:'200px'}}>
          Expirence synergy as our collabrative team works seamlessly
          </p>

        </div>
        <div key="back">
            <p style={{width:'250px'}}>
            Experience synergy as our collaborative team works seamlessly, bringing diverse skills together to address your challenges comprehensively.
            </p>
        </div>
      </ReactCardFlip>
      <div className={`${flippedStates[1]?'bgpink':'bgblue'}`}
      style={{width:'15px',height:'25px',position:'absolute',top:'-23px',right:'40px',borderRadius:'60px 30px 0px 0px'}}
      onMouseEnter={()=>handleFlip(1,true)}>

      </div>
      <div className={`${flippedStates[1]?'bgpink':'bgblue1'}`}
      style={{width:'80px',height:'95px',position:'absolute',top:'-23PX',right:'-36px',borderRadius:'0px 25px 0px 25px'}}
      onMouseLeave={()=>handleFlip(1,false)}>
        <img style={{width:'50px',marginLeft:'15px',marginTop:'10px'}} src={require('../../Assest/united.png')} alt="" />
      </div>

    </section>

    <section style={{top:'450px',left:'130px'}} 
    className={`${flippedStates[2]?'bg-black text-white':'bggrey'}
     col-lg-3 marign threesiderounded p-2 position-absolute transi h-450 `} 
    onMouseEnter={()=>handleFlip(2,true)}
    onMouseLeave={()=>handleFlip(2,false)}>
        <ReactCardFlip isFlipped={flippedStates[2]} flipDirection='vertical'>
        <div key="front">
            <h3>
            On-Time Delivery:
            </h3>
            <p>
            Count on us for punctual project completion
            </p>
        </div>
        <div key="back">
            <p style={{width:'200px'}}>
            Count on us for punctual project completion, meeting deadlines with precision and ensuring your goals are achieved on schedule.
            </p>
       </div>
        </ReactCardFlip>
        <div className={`${flippedStates[2]?'bgpink':'bgblue'}`}
      style={{width:'15px',height:'25px',position:'absolute',top:'-23px',right:'40px',borderRadius:'60px 30px 0px 0px'}}
      onMouseEnter={()=>handleFlip(2,true)}>

      </div>
      <div className={`${flippedStates[2]?'bgpink':'bgblue1'}`}
      style={{width:'80px',height:'95px',position:'absolute',top:'-23PX',right:'-36px',borderRadius:'0px 25px 0px 25px'}}
      onMouseLeave={()=>handleFlip(2,false)}>
        <img style={{width:'50px',marginLeft:'15px',marginTop:'10px'}} src={require('../../Assest/personal-computer.png')} alt="" />
      </div>

    </section>
    <section style={{top:'20px',right:'-05px',borderRadius:'30px 30px 0px 30px'}}
    className={`${flippedStates[3]?'bg-black text-white':'bggrey'}
    col-lg-3 marign  p-2 position-absolute transi h-450 `} 
    onMouseEnter={()=>handleFlip(3,true)}
    onMouseLeave={()=>handleFlip(3,false)} >
      <ReactCardFlip isFlipped={flippedStates[3] }flipDirection='vertical'>
        <div key="front">
           <h3>
               Risk Management
           </h3>
           <p style={{width:'200px'}}>
           Trust our robust risk management strategies
           </p>
        </div>
        <div key="back">
         <p style={{width:'200px'}}>
         Trust our robust risk management strategies, safeguarding your ventures and providing a secure foundation for success.
         </p>
        </div>
      </ReactCardFlip>
      <div className={`${flippedStates[3]?'bgpink':'bgblue'}`}
      style={{width:'15px',height:'25px',position:'absolute',top:'-23px',right:'40px',borderRadius:'60px 30px 0px 0px'}}
      onMouseEnter={()=>handleFlip(3,true)}>

      </div>
      <div className={`${flippedStates[3]?'bgpink':'bgblue1'}`}
      style={{width:'80px',height:'95px',position:'absolute',top:'-23PX',right:'-36px',borderRadius:'0px 25px 0px 25px'}}
      onMouseLeave={()=>handleFlip(3,false)}>
        <img style={{width:'50px',marginLeft:'15px',marginTop:'10px'}} src={require('../../Assest/risk-management.png')} alt="" />
      </div>

    </section>
    <section style={{top:'250px',right:'-50px',borderRadius:'30px 30px 0px 30px'}}
    className={`${flippedStates[4]?'bg-black text-white':'bggrey'}
    col-lg-3 marign  p-2 position-absolute transi h-450 `} 
    onMouseEnter={()=>handleFlip(4,true)}
    onMouseLeave={()=>handleFlip(4,false)} >
      <ReactCardFlip isFlipped={flippedStates[4] }flipDirection='vertical'>
        <div key="front">
           <h3>
              Avanced Tech
           </h3>
           <p style={{width:'200px'}}>
           Stay ahead with cutting-edge technology at your fingertips
           </p>
        </div>
        <div key="back">
              <p style={{width:'200px'}}>
              Stay ahead with cutting-edge technology at your fingertips, empowering your endeavors with the latest innovations and efficiencies.
              </p>
        </div>
      </ReactCardFlip>
     
      <div className={`${flippedStates[4]?'bgpink':'bgblue'}`}
      style={{width:'15px',height:'25px',position:'absolute',top:'-23px',right:'40px',borderRadius:'60px 30px 0px 0px'}}
      onMouseEnter={()=>handleFlip(4,true)}>

      </div>
      <div className={`${flippedStates[4]?'bgpink':'bgblue1'}`}
      style={{width:'80px',height:'95px',position:'absolute',top:'-23PX',right:'-36px',borderRadius:'0px 25px 0px 25px'}}
      onMouseLeave={()=>handleFlip(4,false)}>
        <img style={{width:'50px',marginLeft:'15px',marginTop:'10px'}} src={require('../../Assest/advice.png')} alt="" />
      </div>
      
    </section>
    <section style={{top:'450px',right:'-05px',borderRadius:'30px 30px 0px 30px'}}
     className={`${flippedStates[5]?'bg-black text-white':'bggrey'}
     col-lg-3 marign  p-2 position-absolute transi h-450 `} 
     onMouseEnter={()=>handleFlip(5,true)}
     onMouseLeave={()=>handleFlip(5,false)}>
      <ReactCardFlip isFlipped={flippedStates[5]} flipDirection='vertical' >
        <div key="front"> 
           <h3>
           Customized Advice
           </h3>
           <p style={{width:'200px'}}>
           Receive personalized guidance that aligns with your goals
           </p>
        </div>
        <div key="back">
            <p style={{width:'220px'}}>
            Receive personalized guidance that aligns with your goals, as our expert advisors tailor advice to suit your specific business needs.
            </p>
            
        </div>
      </ReactCardFlip>
      
      <div 
      className={`${flippedStates[5]?'bgpink':'bgblue'}`} 
      style={{width:'15px',height:'25px',position:'absolute',top:'-23px',right:'40px',borderRadius:'60px 30px 0px 0px'}}
      onMouseEnter={()=>handleFlip(4,true)}>

      </div>
      <div className={`${flippedStates[5]?'bgpink':'bgblue1'} `}
       style={{width:'80px',height:'95px',position:'absolute',top:'-23PX',right:'-36px',borderRadius:'0px 25px 0px 25px'}}
      onMouseLeave={()=>handleFlip(4,false)}>
        <img style={{width:'50px',marginLeft:'15px',marginTop:'10px'}} src={require('../../Assest/book.png')} alt="" />
      </div>
      
    </section>

    </div>


  )
}

export default Choose;