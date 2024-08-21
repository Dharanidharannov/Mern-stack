import React, { useContext, useEffect } from 'react'
import { AppStorage } from '../context/AppStore'

const TestmonialPage = () => {
  let {setActive}=useContext(AppStorage)
  useEffect(()=>{
    setActive('testimonial')
  })

  return (
    <div>TestmonialPage</div>
  )
}

export default TestmonialPage