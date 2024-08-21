import React, { useContext, useEffect } from 'react'
import { AppStorage } from '../context/AppStore'

const ServicePage = () => {
  let {setActive}=useContext(AppStorage)

  useEffect(()=>{
    setActive('service')
  })
  return (
    <div>ServicePage</div>
  )
}

export default ServicePage