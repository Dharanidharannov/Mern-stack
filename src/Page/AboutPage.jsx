import React, { useContext, useEffect } from 'react'
import { AppStorage } from '../context/AppStore'
import Aboutcompany from '../Components/Aboutcomponents/Aboutcompany'

const AboutPage =() => {
  let {setActive} = useContext(AppStorage)
  useEffect(()=>{
    setActive('about' )
  },[])
 

  return (
    <div>
          <Aboutcompany/>
    </div>
  )
}

export default AboutPage