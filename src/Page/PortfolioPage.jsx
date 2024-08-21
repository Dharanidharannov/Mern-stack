import React, { useContext, useEffect } from 'react'
import { AppStorage } from '../context/AppStore'

const PortfolioPage = () => {
  let {setActive}=useContext(AppStorage)

useEffect(()=>{
  setActive('portfolio')
})
  return (
    <div>PortfolioPage</div>
  )
}

export default PortfolioPage